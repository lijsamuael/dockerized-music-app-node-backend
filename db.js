const mongoose = require("mongoose");

// Get the MongoDB URI from environment variables
const mongoURI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/default-db";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
