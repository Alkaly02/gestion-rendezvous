require('dotenv').config()
const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const userRoutes = require('./routes/UserRoutes')
const cors = require('cors')
const connectToMongoDB = require('./config/db')
const passport = require('passport')

const app = express()
app.use(session({secret: "cats"}))
app.use(passport.initialize())
app.use(passport.session())

app.use(cors())

// database connexion
connectToMongoDB()

const port = process.env.PORT || 5000
// body parser
app.use(express.json())

app.use('/api', userRoutes)

app.listen(port, () => console.log("The server is running on port : ", port))