import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';

const Navbar = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {userInfo ? (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/create">New Blog</Link></li>
            <li><button onClick={logoutHandler}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
