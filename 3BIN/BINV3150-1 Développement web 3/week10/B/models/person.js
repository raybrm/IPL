//Configuation de l'accès a la db

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

// modifie ce qu'on renvoie au client après un GET 
// on met l'id sous forme de string et on ne retourne pas l'id de base ainsi que le versioning(__v)
personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})

module.exports = mongoose.model('Person', personSchema, 'people') // exporte le modèle Person