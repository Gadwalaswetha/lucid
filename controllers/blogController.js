const Blog = require('../models/Blog');

const getBlogs = async (req, res) => {
  const blogs = await Blog.find().populate('author', 'name');
  res.json(blogs);
};

const createBlog = async (req, res) => {
  const { title, content } = req.body;
  const blog = await Blog.create({ title, content, author: req.user._id });
  res.status(201).json(blog);
};

module.exports = { getBlogs, createBlog };
