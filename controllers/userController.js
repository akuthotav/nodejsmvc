const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const registerUser = asyncHandler(async (req, res) => {
  //res.json({message: 'Register the user'});
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Invalid username or email or password");
  }
  const userAvailable = await User.findOne({ email: email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password: " + hashedPassword);
  const user = await User.create({
    username: username,
    email: email,
    password: hashedPassword,
  });
  res.json({ message: "User Registered" });
});

const loginUser = asyncHandler(async (req, res) => {
  //res.json({ message: "Login user" });
  const { email, password } = req.body;
  //const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.findOne({ email: email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res
      .status(200)
      .send({ message: "User authenticated and validated the password" });
  } else {
    res.status(400).send({ message: "User not found" });
  }
});

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = { registerUser, loginUser, currentUser };
