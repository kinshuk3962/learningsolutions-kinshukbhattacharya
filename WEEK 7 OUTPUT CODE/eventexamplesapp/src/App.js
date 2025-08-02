import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayHello = () => {
    alert("Hello! This is a static message.");
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handleClick = (e) => {
    alert("I was clicked");
    console.log("Synthetic event:", e);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎯 React Event Handling Examples</h1>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button>
      <h2>Multiple Function Call</h2>
      <button onClick={increment}>Increase & Greet</button>
      <h2>Welcome Message</h2>
      <button onClick={() => sayWelcome("Welcome to the Event App!")}>Say Welcome</button>
      <h2>Synthetic Event</h2>
      <button onClick={handleClick}>Click Me (Synthetic)</button>
      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;