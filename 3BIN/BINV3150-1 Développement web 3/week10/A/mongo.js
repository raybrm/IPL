const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an arguments: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]
const databasename = 'phonebook'

const url = `mongodb+srv://rayanBarman:${password}@cluster0.xnokp.mongodb.net/${databasename}?retryWrites=true&w=majority`

// connection à la base de donnée  
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

// la structure d'une personne => shema
const personSchema = new mongoose.Schema({
  name: String,
  phone: String,
})

const Person = mongoose.model('Person', personSchema) // model basé sur le schéma

const person = new Person({
  name: process.argv[3],
  phone: process.argv[4],
})

//ajout à la BD
if (process.argv.length === 5) {
    person.save().then(result => {
        console.log('added '+ result.name + ' number ' + result.phone + ' to phonebook')
        mongoose.connection.close()
      })      
}

// retrieve from database
if (process.argv.length === 3) {
    // Person.find({name : "veigo"})
    Person.find({}).then(result => {
    console.log("phonebook:")
    result.forEach(person => {
        console.log(person.name + ' ' + person.phone) 
        console.log(person)
    })
    mongoose.connection.close()
    })
}