const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const User = require("./models/User");

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const username = "Eden";
    const password = "Metahu@21";

    // Check if admin user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      console.log("Admin user already exists");
      process.exit();
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new admin user
    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("Admin user created");
    process.exit();
  } catch (err) {
    console.error("Error creating admin user:", err.message);
    process.exit(1);
  }
};

createAdmin();
