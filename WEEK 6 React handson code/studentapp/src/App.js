// src/App.js
import React from 'react';
import './App.css'; // Keep if you want to use App.css for basic styling
import Home from './Components/Home';     // Import Home component
import About from './Components/About';   // Import About component
import Contact from './Components/Contact'; // Import Contact component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Management Portal</h1>
      </header>
      <main>
        <Home />    {/* Render the Home component */}
        <About />   {/* Render the About component */}
        <Contact /> {/* Render the Contact component */}
      </main>
    </div>
  );
}

export default App;