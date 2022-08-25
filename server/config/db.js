//CONNECTION TO MONGODB ... LOCATED IN ROOT FILE, index.js
const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold); //bring colors to main file to work
}

module.exports = connectDB;