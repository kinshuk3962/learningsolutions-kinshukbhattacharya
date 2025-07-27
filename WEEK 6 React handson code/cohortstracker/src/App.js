import React from 'react';
import './App.css'; // Keep existing App.css for basic app styling
import CohortsDetails from './CohortsDetails'; // Import the CohortsDetails component

function App() {
  // Dummy data for cohorts to simulate the dashboard
  // In a real application, this data might come from an API
  const cohortsData = [
    {
      id: 1,
      name: 'INTADMF10',
      program: '.NET FSD',
      startDate: '22-Feb-2022',
      status: 'Scheduled',
      coach: 'Aathma',
      trainer: 'Jojo Jose',
    },
    {
      id: 2,
      name: 'ADM21JF014',
      program: 'Java FSD',
      startDate: '10-Sep-2021',
      status: 'Ongoing',
      coach: 'Apoorv',
      trainer: 'Elisa Smith',
    },
    {
      id: 3,
      name: 'CDBJF21025',
      program: 'Java FSD',
      startDate: '24-Dec-2021',
      status: 'Ongoing',
      coach: 'Aathma',
      trainer: 'John Doe',
    },
    // Add more dummy data as needed for testing
  ];

  return (
    <div className="App">
      <h1>Cohorts Details</h1> {/* Main heading for the dashboard */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {cohortsData.map(cohort => (
          <CohortsDetails key={cohort.id} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;