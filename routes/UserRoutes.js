const express = require('express')
const passport = require('passport')
const { signup, login, signupWithGoogle } = require('../../controllers/UserControllers')
const router = express.Router()

function isLoggedIn(req, res, next){
    req.user ? next() : res.sendStatus(401)
}

router.post('/signup', signup)
router.post('/login', login)

router.get('/auth', signupWithGoogle)

router.get('/auth/google', passport.authenticate('google', {scope: ['email', 'profile']}))
router.get( '/google/callback',
    passport.authenticate( 'google', {
        successRedirect: 'http://localhost:3000/admin',
        failureRedirect: '/api/google/failure'
}));

router.get('/protected', isLoggedIn, (req, res) => {
    res.send("Hello Alkaly")
})

router.get('/google/failure', (req, res) => {
    res.send("Somethin went wrong")
})

module.exports = router