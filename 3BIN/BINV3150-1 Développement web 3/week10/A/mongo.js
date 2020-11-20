const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an arguments: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]
const databasename = 'phonebook'

const url =
  `mongodb+srv://rayan_barman:${password}@cluster0.itu2i.mongodb.net/${databasename}?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

// la structure d'une personne
const personSchema = new mongoose.Schema({
  name: String,
  phone: String,
})

const Person = mongoose.model('Person', personSchema) // model basé sur le schéma

const person = new Person({
  name: process.argv[3],
  phone: process.argv[4],
})

//Add à la BD
if (process.argv.length === 5) {
    person.save().then(result => {
        console.log('added '+ result.name + ' number ' + result.phone + ' to phonebook')
        mongoose.connection.close()
      })      
}

if (process.argv.length === 3) {
    // Recupère de la DB
    Person.find({}).then(result => {
    console.log("phonebook:")
    result.forEach(person => {
        console.log(person.name + ' ' + person.phone) 
    })
    mongoose.connection.close()
    })
}