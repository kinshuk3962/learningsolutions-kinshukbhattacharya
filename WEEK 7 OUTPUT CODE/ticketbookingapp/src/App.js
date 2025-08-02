import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Welcome from './Welcome';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (name) => {
    setUserName(name);
    setLoggedIn(true);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ color: '#4B0082' }}>🎟️ Ticket Booking App</h1>
      {loggedIn ? (
        <Welcome name={userName} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;