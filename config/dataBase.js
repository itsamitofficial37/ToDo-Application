const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      
    });
    console.log("DB connection is successfully created");
  } catch (error) {
    console.error("DB connection error:", error);
  }
};

module.exports = dbConnect;
