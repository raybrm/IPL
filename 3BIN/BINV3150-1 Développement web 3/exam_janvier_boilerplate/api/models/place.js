const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: String 
})

placeSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

// export model 
module.exports = mongoose.model('Place', placeSchema)