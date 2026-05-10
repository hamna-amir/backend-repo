const Comment = require("../models/Comment");
const Post = require("../models/Post");
const User = require("../models/User");


// ADD COMMENT
exports.addComment = async (req, res) => {

  try {

    const post = await Post.findById(req.params.postId);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found"
      });
    }

    const user = await User.findById(req.body.user);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    const comment = await Comment.create({
      text: req.body.text,
      post: req.params.postId,
      user: req.body.user
    });

    res.status(201).json({
      success: true,
      data: comment
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};



// GET COMMENTS
exports.getComments = async (req, res) => {

  try {

    const comments = await Comment.find({
      post: req.params.postId
    }).populate("user", "username");

    res.status(200).json({
      success: true,
      data: comments
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};



// DELETE COMMENT
exports.deleteComment = async (req, res) => {

  try {

    await Comment.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Comment deleted"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};