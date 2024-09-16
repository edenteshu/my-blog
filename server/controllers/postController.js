const Post = require("../models/Post");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createPost = async (req, res) => {
  const { title, content, author, tags } = req.body;

  const newPost = new Post({
    title,
    content,
    author,
    tags,
  });

  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getPosts, createPost };
