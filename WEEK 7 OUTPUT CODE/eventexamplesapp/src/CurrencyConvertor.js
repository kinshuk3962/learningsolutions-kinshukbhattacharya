import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState(null);
  const conversionRate = 0.011;

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = (parseFloat(rupees) * conversionRate).toFixed(2);
    setEuros(result);
  };

  return (
    <div>
      <h2>💱 Currency Convertor (INR ➡ EUR)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter amount in INR"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
      {euros && <p>Converted Amount: € {euros}</p>}
    </div>
  );
};

export default CurrencyConvertor;