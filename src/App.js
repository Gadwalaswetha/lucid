import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import BlogScreen from './screens/BlogScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import CreateBlogScreen from './screens/CreateBlogScreen';

const App = () => (
  <Router>
    <Navbar />
    <Route path="/" component={HomeScreen} exact />
    <Route path="/blogs/:id" component={BlogScreen} />
    <Route path="/profile" component={ProfileScreen} />
    <Route path="/login" component={LoginScreen} />
    <Route path="/register" component={RegisterScreen} />
    <Route path="/create" component={CreateBlogScreen} />
  </Router>
);

export default App;
