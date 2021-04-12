require('dotenv').config()
const express = require("express")
const morgan = require('morgan')
const Person = require('./models/person')


// Initializers. These blocks should be placed in different files under "initializers/" directory
// but let's keep this simple.
const app = express();

app.use(express.json());

morgan.token('body', (request) => {
  return JSON.stringify(request.body);
})
morgan.token('currentUserEmail', (request) => {
  return request.currentUser && request.currentUser.email || "anonymous";
})
const logger = morgan(':method :url :status :res[content-length] - :response-time ms :body (:currentUserEmail)')
app.use(logger);

const attachCurrentuser = (request, response, next) => {
  const email = request.header("X-USER-EMAIL");
  if(email) request.currentUser = {email};
  next();
}
app.use(attachCurrentuser);


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// Routes. These blocks should be placed in different files under "routes/" directory
// but let's keep this simple.

app.get("/info", (request, response) => {

  
  Person.countDocuments().then(result => { // dans le find c'est la condition entre {} si rien alors on prend tout
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
            response.json(person)
          } else {
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
