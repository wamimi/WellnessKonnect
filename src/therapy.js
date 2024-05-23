// src/Therapy.js
import React, { useState } from 'react';
import axios from 'axios';

const Therapy = () => {
  const [therapist, setTherapist] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/schedule', { therapist, date, time })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={therapist} onChange={(e) => setTherapist(e.target.value)} required>
        <option value="">Select Therapist</option>
        <option value="Dr. A">Dr. A</option>
        <option value="Dr. B">Dr. B</option>
        <option value="Dr. C">Dr. C</option>
      </select>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      <button type="submit">Schedule</button>
    </form>
  );
};

export default Therapy;
