// src/Education.js
import React from 'react';
import { Link } from 'react-router-dom';

const Education = () => {
  return (
    <div>
      <h1>Educational Resources</h1>
      <Link to="/education/module1">Understanding Mental Health</Link>
      <Link to="/education/module2">Stress Management</Link>
      <Link to="/education/module3">Mindfulness</Link>
    </div>
  );
};

export default Education;
