const mongoose = require("mongoose");

let connectionPromise = null;

const connectDB = () => {
  if (!connectionPromise) {
    connectionPromise = mongoose.connect(process.env.MONGO_URI);
  }
  return connectionPromise;
};

module.exports = connectDB;
