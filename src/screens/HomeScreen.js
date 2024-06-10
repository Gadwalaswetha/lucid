import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listBlogs } from '../actions/blogActions';
import BlogPreview from '../components/BlogPreview';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogList;

  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch]);

  return (
    <div>
      <h1>Blogs</h1>
      {loading ? <p>Loading...</p> : error ? <p>{error}</p> : (
        <div>{blogs.map((blog) => <BlogPreview key={blog._id} blog={blog} />)}</div>
      )}
    </div>
  );
};

export default HomeScreen;
