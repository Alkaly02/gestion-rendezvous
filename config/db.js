const mongoose = require('mongoose')

const connectToMongoDB = async () => {
    try{
         mongoose.connect(process.env.DB_CONNECT)
         console.log("Connected to mongoDB, Happy coding");
    }
    catch(error){
        console.log(error);
    }
}

module.exports = connectToMongoDB