const express = require('express')
const app = express()
const cors = require('cors')
const http = require('http')
const notesRouter = require('./controllers/notes')
require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)
  .then(result => console.log('connected to MongoDB'))
  .catch(error => console.log('Error', error.message))

app.use(express.json())
app.use(cors())

app.use('/api/notes', notesRouter)

const server = http.createServer(app)

const PORT = process.env.PORTS || 3001
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})