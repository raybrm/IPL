const mongoose = require('mongoose')

// const veut dire que le variable ne peut pas être assigné mais elle peut changer.
if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://rayanBarman:${password}@cluster0.xnokp.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

// le schéma d'une note, ce qui sera save en db 
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

// const Note = mongoose.model('Note', noteSchema) // model basé sur le schéma

// const note = new Note({ // fonction de construction => note à toutes les propriétes du model
//   content: 'Une nouvelle note',
//   date: new Date(),
//   important: true,
// })

// // Add à la BD
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
