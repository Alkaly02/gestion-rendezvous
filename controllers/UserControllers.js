const UserModel = require('../model/UserModel')
require('../config/auth')

// @desc: dignup
// @route: /api/signup
const signup = async (req, res) => {
    const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password
    }
    const {email} = user
    const findUser = await UserModel.find({email})
    if(findUser.length){
        return res.status(402).send({error: "L'utilisateur exist deja"})
    }
    try {
        const createdUser = await UserModel.create(user)
        res.status(200).json(createdUser)
    }
    catch (err) {
        res.status(400).send(err)
    }
}

// @desc: dignup
// @route: /api/signup
const signupWithGoogle = (req, res) => {
    res.send('<a href="/api/auth/google">Authentication with Google</a>')
}

// @desc: login
// @route: /api/login
const login = async (req, res) => {
    const { email, password } = req.body
    const user = await UserModel.find({ email, password })
    try {
        if (user.length) {
         return res.send(user)
        }
        throw new Error("L'utilisateur n'existe pas")
    }
    catch (error) {
        // console.log(error);
        res.status(400).json({error: "L'utilisateur n'existe pas"})
    }
}

const loginWithGoogle = () => {
    
}

module.exports = {
    login,
    loginWithGoogle,
    signup,
    signupWithGoogle
}