const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        //Idk why this wont accept the PROCESS.ENV.MONGO_URI
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology:true,
          });
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;