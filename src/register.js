// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to the backend
    axios.post('/api/register', { name, age, gender, location })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
      <input type="text" placeholder="Gender (M/F)" value={gender} onChange={(e) => setGender(e.target.value)} required />
      <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
