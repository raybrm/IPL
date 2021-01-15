const router = require('express').Router()
const Place = require('../models/place')

//Find all
router.get('/', (request, response, next) => {
    Place.find({})
        .then(places => response.json(places))
        .catch(error => next(error))
})


//Delete one
router.delete('/:id', (request, response, next) => {
    Place.findByIdAndRemove(request.params.id)
        .then(result => {
            if (result) {
                response.status(204).end()
            } else {
                response.status(404).end()
            }
        })
        .catch(error => next(error))
})

//Insert one
router.post('/', (request, response, next) => {
    const body = request.body
    //check body
    const errorMessage = []
    if (!body.name) errorMessage.push("name must be present")
    if (errorMessage.length > 0) {
        response.status(422).json({errorMessage})
        return
    }
    //Check existing
    Place.find({name: body.name})
        .then(place => {
            if (place && place.length > 0) {
                errorMessage.push("name must be unique")
                response.status(422).json({errorMessage})
            } else {
                const place = new Place(body)
                place.save().then(result => {
                    response.json(result)
                }).catch(error => next(error))
            }
        }).catch(error => next(error))
})

module.exports = router