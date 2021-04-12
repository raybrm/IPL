const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://rayan_barman:${password}@cluster0.itu2i.mongodb.net/note-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

// la structure d'une note
const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

// modifie la méthode toJSON du schéma pour suprrimer ce que nous avons pas besoin 
noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Note = mongoose.model('Note', noteSchema) // model basé sur le schéma

const note = new Note({ // fonction de constructio, note à toutes les propriétes du model
  content: 'Hazimut',
  date: new Date(),
  important: true,
})

// Add à la BD
// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })

// Recupère de la DB
// Note.find({}).then(result => { // dans le find c'est la condition entre {} si rien alors on prend tout
//   result.forEach(note => {
//     console.log(note)
//   })
//   mongoose.connection.close()
// })

// app.get('/api/notes', (request, response) => {
//   Note.find({}).then(notes => { // notes est un tableau d'objet
//     response.json(notes)
//   })
// })