const mongoose = require('mongoose')

const actionSchema = new mongoose.Schema({
    name: String 
})

actionSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

// export model 
module.exports = mongoose.model('Action', actionSchema)