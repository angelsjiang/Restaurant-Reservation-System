const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// GET home page
app.get('/', function  (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
})

// GET reservation
app.get('/reservation', function  (req, res) {
    res.sendFile(path.join(__dirname, 'reserve.html'))
})

// POST reservation
app.post('/reservation', function  (req, res) {
    console.log('Save a reservation')
})

// GET all tables
app.get('/tables', function  (req, res) {
    res.sendFile(path.join(__dirname, 'tables.html'))
})

// Listen on port 3000
app.listen(PORT, function () {
    console.log('App is listening on port: ' + PORT)
})