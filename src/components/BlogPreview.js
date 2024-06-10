import React from 'react';
import { Link } from 'react-router-dom';

const BlogPreview = ({ blog }) => (
  <div>
    <h2>{blog.title}</h2>
    <p>{blog.content.substring(0, 100)}...</p>
    <Link to={`/blogs/${blog._id}`}>Read More</Link>
    <p>By {blog.author.name}</p>
  </div>
);

export default BlogPreview;
