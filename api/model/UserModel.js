const mongoose = require('mongoose')
const Schema = mongoose.Schema
const findOrCreate = require("mongoose-findorcreate");

const userSchema = new Schema({
    firstname:{
        type: String,
        required: [true, "Please give the firstname"]
    },
    lastname:{
        type: String,
        required: [true, "Please give the lastname"]
    },
    phone:{
        type: String,
        required: [true, "Please give the phone"]
    },
    email:{
        type: String,
        required: [true, "Please give the email"],
        unique: true,
    },
    password:{
        type: String,
        required: [, "Please give the password"]
    }
})

userSchema.plugin(findOrCreate);

const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel