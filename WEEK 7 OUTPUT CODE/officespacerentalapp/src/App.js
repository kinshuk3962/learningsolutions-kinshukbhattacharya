import React from 'react';

function App() {
  const heading = <h1>🏢 Office Space Rental App</h1>;
  const imageURL = "https://via.placeholder.com/300x200?text=Office+Space";

  const office = {
    name: "TechPark Towers",
    rent: 75000,
    address: "Electronic City, Bangalore"
  };

  const officeList = [
    { name: "Startup Hub", rent: 55000, address: "HSR Layout" },
    { name: "Global Spaces", rent: 82000, address: "Koramangala" },
    { name: "Skyline Workzones", rent: 60000, address: "Indiranagar" }
  ];

  const getRentStyle = (rent) => {
    return {
      color: rent < 60000 ? "red" : "green",
      fontWeight: "bold"
    };
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {heading}

      <img src={imageURL} alt="Office" style={{ width: '300px', marginBottom: '20px' }} />

      <h2>Primary Office:</h2>
      <p><strong>Name:</strong> {office.name}</p>
      <p><strong>Rent:</strong> <span style={getRentStyle(office.rent)}>{office.rent}</span></p>
      <p><strong>Address:</strong> {office.address}</p>

      <h2>Other Available Spaces:</h2>
      <ul>
        {officeList.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Rent:</strong> <span style={getRentStyle(item.rent)}>{item.rent}</span></p>
            <p><strong>Address:</strong> {item.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;