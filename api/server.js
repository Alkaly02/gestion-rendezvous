require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const userRoutes = require('./routes/UserRoutes')
const cors = require('cors')

app.use(cors())

// database connexion
mongoose.connect(
    process.env.DB_CONNECT,
    () => console.log("Connected to database")
)

const port = process.env.PORT || 5000
// body parser
app.use(express.json())

app.use('/api', userRoutes)

app.listen(port, () => console.log("The server is running"))