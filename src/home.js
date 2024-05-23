// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Wellness Connect</h1>
      <p>Your gateway to mental health support and resources.</p>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
};

export default Home;
