const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('My first node app')
})

app.get('/test', (req, res) => {
  res.send('Testing a new endpoint!')
})

app.listen(3000)