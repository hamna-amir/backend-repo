const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcryptjs");


// REGISTER USER
exports.registerUser = async (req, res) => {

  try {

    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      success: true,
      data: user
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};



// GET ALL USERS
exports.getUsers = async (req, res) => {

  try {

    const users = await User.find().select("-password");

    res.status(200).json({
      success: true,
      data: users
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};



// GET SINGLE USER WITH POSTS
exports.getUserById = async (req, res) => {

  try {

    const user = await User.findById(req.params.id)
      .select("-password");

    const posts = await Post.find({
      author: req.params.id
    });

    res.status(200).json({
      success: true,
      user,
      posts
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};