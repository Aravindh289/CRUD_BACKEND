const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://aravindh2527:abc%40123@crudappbackend.ampsu1z.mongodb.net/crudappbackend?retryWrites=true&w=majority');
        console.log("DB connected");
    } catch (err) {
        console.error("DB connection failed", err.message);
    }
};

module.exports = { connectDB };
