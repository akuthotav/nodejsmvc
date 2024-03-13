
const mongoose = require('mongoose');

const uri = "mongodb+srv://admin:admin123@cluster0.c2r0jib.mongodb.net/CapOneDB?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
    try {
        //const connect = await mongoose.connect(process.env.DB_STRING);
        const connect = await mongoose.connect(uri);
        console.log('Connected to database');
    } catch (err) {
        console.log(err);
    }
};

module.exports = connectDB;