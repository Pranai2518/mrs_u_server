const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

const uri = process.env.uri
mongoose.connect(uri)
const connection = mongoose.connection
connection.once('open', () => {
    console.log('mdb connected successfully')
})

//routes
const user = require('./routes/user')

app.use('/user', user)

let port = process.env.PORT || 4500
app.listen(port, () => { console.log('server running at ' + port) })