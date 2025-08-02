import React from 'react';

function Welcome({ name }) {
  return (
    <div style={{ backgroundColor: '#e6ffe6', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ color: '#006400' }}>Welcome, {name}!</h2>
      <p>Your seat is booked successfully 🎉</p>
    </div>
  );
}

export default Welcome;