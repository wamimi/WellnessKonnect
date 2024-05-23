// src/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/schedule">Schedule Therapy</Link>
      <Link to="/checkin">Check-in</Link>
      <Link to="/education">Education</Link>
    </div>
  );
};

export default Dashboard;
