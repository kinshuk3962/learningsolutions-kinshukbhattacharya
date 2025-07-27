// src/App.js
import React from 'react';
import './App.css'; // Keep if you still want default App.css styles
import CalculateScore from './Components/CalculateScore'; // Import CalculateScore component
import './Stylesheets/mystyle.css'; // Import your custom stylesheet

function App() {
  return (
    <div className="App">
      <header>
        <h1>Student Score Calculator</h1>
      </header>
      <main>
        {/* Render CalculateScore with example props */}
        <CalculateScore
          name="Alice Johnson"
          school="Central High"
          total={180} // Example: sum of two scores
          goal={90}
        />
        <CalculateScore
          name="Bob Williams"
          school="North Middle"
          total={140}
          goal={80}
        />
         <CalculateScore
          name="Charlie Brown"
          school="South Elementary"
          total={195}
          goal={95}
        />
      </main>
    </div>
  );
}

export default App;