const express = require('express')
const app = express()
const EventEmitter = require('events')

const event = new EventEmitter()
let count = 0

event.on('count', (parameter1, parameter2) => {
    count += 1
    console.log('count', count)
    console.log(parameter1, parameter2)
})

app.get('/', (req, res) => {
    event.emit('count', "parameter1", "parameter2")
    res.send('Hello World')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})