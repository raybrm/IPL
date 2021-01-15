const router = require('express').Router()
const Action = require('../models/action')

//Find all 
router.get('/', (request, response, next) => {
    Action.find({})
        .then(actions => response.json(actions))
        .catch(error => next(error))
})

//Delete one
router.delete('/:id', (request, response, next) => {
    Action.findByIdAndRemove(request.params.id)
        .then(result => {
            if (result) {
                response.status(204).end() // response.json(result)
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
    if (!body.name || body.name.length < 3) errorMessage.push("name must be present and at least 3 characters")
    if (errorMessage.length > 0) {
        response.status(422).json({errorMessage})
        return
    }
    //Check existing
    Action.find({name : body.name})
        .then(action => {
            if (action && action.length > 0) {
                errorMessage.push("name must be unique")
                response.status(422).json({errorMessage})
            }
            else {
                const action = new Action(body)
                action.save().then(result => {
                    response.json(result)
                }).catch(error => next(error))
            } 
        }).catch(error => next(error))
})

module.exports = router
