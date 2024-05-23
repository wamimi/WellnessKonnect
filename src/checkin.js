// src/CheckIn.js
import React, { useState } from 'react';
import axios from 'axios';

const CheckIn = () => {
  const [mood, setMood] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/checkin', { mood })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={mood} onChange={(e) => setMood(e.target.value)} required>
        <option value="">How are you feeling today?</option>
        <option value="Very Happy">Very Happy</option>
        <option value="Happy">Happy</option>
        <option value="Neutral">Neutral</option>
        <option value="Sad">Sad</option>
        <option value="Very Sad">Very Sad</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CheckIn;
