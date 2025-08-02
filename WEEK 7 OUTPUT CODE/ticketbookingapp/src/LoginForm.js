import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      onLogin(name);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
      </label>
      <button type="submit" style={buttonStyle}>Login</button>
    </form>
  );
}

const formStyle = {
  backgroundColor: '#f0f8ff',
  padding: '20px',
  borderRadius: '10px',
  width: '300px',
};

const inputStyle = {
  margin: '10px 0',
  padding: '8px',
  width: '100%',
  boxSizing: 'border-box',
};

const buttonStyle = {
  backgroundColor: '#4B0082',
  color: 'white',
  padding: '10px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default LoginForm;