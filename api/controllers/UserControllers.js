const UserModel = require('../model/UserModel')

module.exports.signup = async (req, res) => {
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

module.exports.signupWithGoogle = () => {
    
}

module.exports.login = async (req, res) => {
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

module.exports.loginWithGoogle = () => {
    
}