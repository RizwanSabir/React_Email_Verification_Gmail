const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Email', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit the process if the database connection fails
  }
};
