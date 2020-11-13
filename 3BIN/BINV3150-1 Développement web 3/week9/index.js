console.log("hello world")

const { response } = require('express')
const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = 3001

morgan.token('custom', function(req, res){ // définit notre propre token 
    if (req.method === 'POST'){
        return JSON.stringify(req.body)
    }
})

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :custom'))

let persons = [  
    {id: 1,    name: "Arto Hellas",  number: "040-123456"}, 
    {id: 2,    name: "Ada Lovelace",  number: "39-44-5323523"},
    {id: 3,    name: "Dan Abramov",  number: "12-43-234345"},
    {id: 4,    name: "Marry Poppendick",  number: "39-23-6423122"},
]


app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
  
app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if (!body.name || !body.phone) {
      return response.status(422).json({ 
        error: 'name and phone missing' 
      })
    }

    newPersons = persons.filter(person => person.name === body.name)
    
    if (newPersons.length !== 0) {
        return response.status(422).json({ 
            error: 'name must be unique' 
        })
    }
    
    const person = {
        id: Math.random()*999999,
        name: body.name,
        phone: body.phone,
    }
  
    persons = persons.concat(person)
  
    response.json(person)

})

app.get('/api/persons/:id', (request, response) => {  
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.get('/info', (request, response) => {
    const countPersons = persons.length
    const date = new Date()
    const txt = `Phonebook has info for ${countPersons} people`
    response.send(`<p>${txt}</p><p>${date}</p>`)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})