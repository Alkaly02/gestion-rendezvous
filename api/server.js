require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const userRoutes = require('./routes/UserRoutes')

// database connexion
mongoose.connect(
    process.env.DB_CONNECT,
    () => console.log("Connected to database")
)

const port = 3000
// body parser
app.use(express.json())

app.use('/api', userRoutes)

app.listen(port, () => console.log("The server is running"))