const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        //Idk why this wont accept the PROCESS.ENV.MONGO_URI
        const conn = await mongoose.connect('mongodb+srv://omgiszbeast:ANGU4YVdhh4p3hQH@testcluster.qspnu.mongodb.net/Mernapp?retryWrites=true&w=majority');
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;