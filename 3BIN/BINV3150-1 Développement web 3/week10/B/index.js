require('dotenv').config() // permet d'utiliser les varaibles d'environnement dans le fichier .env
const { request, response } = require('express');
const express = require("express")
const morgan = require('morgan')
const Person = require('./models/person')


// Initialise l'API
// Initializers. These blocks should be placed in different files under "initializers/" directory
// but let's keep this simple.
const app = express();

app.use(express.json()); // middleware json

// configuration de morgan
morgan.token('body', (request) => {
  return JSON.stringify(request.body);
})
morgan.token('currentUserEmail', (request) => {
  return request.currentUser && request.currentUser.email || "anonymous";
})
const logger = morgan(':method :url :status :res[content-length] - :response-time ms :body (:currentUserEmail)')
// ajout du middleware morgan
app.use(logger);

const attachCurrentuser = (request, response, next) => {
  const email = request.header("X-USER-EMAIL");
  if(email) request.currentUser = {email};
  next();
}
app.use(attachCurrentuser);


// Routes. These blocks should be placed in different files under "routes/" directory
// but let's keep this simple.

app.get("/info", (request, response) => {

  
  Person.countDocuments().then(result => { // compte le nombre d'entrée dans la base de données
    const now = new Date();
    const bodyContentText = `
    Phonebook has info for ${result} people.
    ${now.toString()}
    `
    response
      .type("text")
      .send(bodyContentText);
    })
});

app.get("/api/persons", (request, response) => {

  Person.find({}).then(result => {
    response.json(result)
  })
});

app.get("/api/persons/:id", (request, response) => {

  Person.findById(request.params.id)
        .then(person => {
          if(person) {
            response.json(person) // code 200 par defaut
          } else { // si y a pas de personne avec l'id
            response.status(404).end()
          }
        })
        .catch(error => { // promise rejected
          console.log(error)
          response.status(400).send({ error: 'malformatted id' })
        })

});


app.post("/api/persons", (request, response) => {

  const personPayload = request.body;

  const errorMessages = [];
  if(!personPayload.name) errorMessages.push("name must be present");
  if(!personPayload.number) errorMessages.push("number must be present");

  if(errorMessages.length > 0){
    response
      .status(422)
      .json({
        errorMessages,
      });
    return;
  }

  const person = new Person({
    name: personPayload.name,
    phone: personPayload.number
  })

  person.save().then(personSaved => {
    response.json(personSaved)
  })
  
});

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
        .then(result => {
          console.log('resultat' + res)
          response.status(204).end()
        })
        .catch(error => next(error))  // appel du middleware error
})


app.put('/api/persons/:id', (request, response, next) =>{
  const body = request.body

  const person = { // ce qu'il sera modifier
    name: body.name, 
    phone: body.phone
  }

  Person.findByIdAndUpdate(request.params.id, person, {new : true}) // {new : true} permet de renvoyer l'objet modifier au lieu de l'original
        .then(updatedPerson => {
          console.log(updatedPerson)
          response.json(updatedPerson)
        })
        .catch(error => next(error))
}) 

// handler of requests with unknown endpoint
const unknowEndpoint = (request, response) => {
  response.status(404).send({error: 'unknown endpoint'})
}

app.use(unknowEndpoint)


const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  if (error.name === 'CastError') {
    return response.status(400).send({error: 'malformated id'})
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

