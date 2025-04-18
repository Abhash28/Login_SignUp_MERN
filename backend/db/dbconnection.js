const mongoose = require("mongoose");
const dbconnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/logindatabase");
    console.log("Connection successfylly");
  } catch (error) {
    console.log("Error to connect database");
  }
};

module.exports = dbconnection;
