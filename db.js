const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.mongoURL);
    console.log(`mongodb connected`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connectDB,
};
