//require('dotenv').config()

const mongoose = require('mongoose')

const url = process.env.MONGODB_URI


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
        .then(result => {
            console.log('connected to MongoDB')
        })
        .catch(error =>{
            console.log('error connecting to MongoDB', error.message)
        })

// la structure d'une personne
const personSchema = new mongoose.Schema({
  name: String,
  phone: String,
})


personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})

module.exports = mongoose.model('Person', personSchema) // exporte le modèle


// const person = new Person({ // fonction de constructio, note à toutes les propriétes du model
//   name: process.argv[3],
//   phone: process.argv[4],
// })

// //Add à la BD
// if (process.argv.length === 5) {
//     person.save().then(result => {
//         console.log('added '+ result.name + ' number ' + result.phone + ' to phonebook')
//         mongoose.connection.close()
//       })      
// }

// if (process.argv.length === 3) {
//     // Recupère de la DB
//     Person.find({}).then(result => { // dans le find c'est la condition entre {} si rien alors on prend tout
//     console.log("phonebook:")
//     result.forEach(person => {
//         console.log(person.name + ' ' + person.phone) 
//     })
//     mongoose.connection.close()
//     })
// }