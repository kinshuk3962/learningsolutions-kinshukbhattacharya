// src/App.js
import React from 'react';
import './App.css';
import Posts from './Posts'; // Import the Posts component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* You can remove or modify the default React content if you wish */}
        <Posts /> {/* Add the Posts component here */}
      </header>
    </div>
  );
}

export default App;