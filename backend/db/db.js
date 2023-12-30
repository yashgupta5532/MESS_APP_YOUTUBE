const mongoose = require('mongoose');

exports.connectDb=async()=>{
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/MessProjectYoutube`);
        console.log(`MONGODB connected successfully`);
    } catch (error) {
        console.log(`Error while connecting mongodb`,error);
    }
}

