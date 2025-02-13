// 1. Import the libraries
const express = require('express')
const app = express()

// 2. Use the router
const usersRoute = require('./routes/users.js')

const moviesRoute = require('./routes/movies.js')

// 3. Middleware (using the router)
app.use('/users',usersRoute)

app.use('/movies',moviesRoute)

app.get('/', (req, res) => {
  res.send('My first node app')
})

app.get('/alex', (req, res) => {
  res.send({'name':'Alex'})
})

app.listen(3000)