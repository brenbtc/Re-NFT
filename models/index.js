// dependencies
const mongoose = require("mongoose")
require("dotenv").config()
const connectionString = process.env.MONGODBURI

// Connect to MongoDB via mongoose
mongoose.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Console.log() connection status
mongoose.connection.on('connected', () => {
    console.log('mongoose connected to ', connectionString);
});

mongoose.connection.on('disconnected', () => {
    console.log('mongoose disconnected to ', connectionString);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose error ', error);
});


// Model Access
module.exports.Nft = require("./nft")
module.exports.Artist = require("./artist")