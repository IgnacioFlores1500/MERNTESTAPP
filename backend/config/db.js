const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        //Idk why this wont accept the PROCESS.ENV.MONGO_URI
        //FIX THIS LATER;
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;
