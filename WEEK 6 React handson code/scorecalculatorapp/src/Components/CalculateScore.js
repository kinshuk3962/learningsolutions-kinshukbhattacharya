// src/Components/CalculateScore.js
import React from 'react';

function CalculateScore(props) {
  const { name, school, total, goal } = props;
  const average = total / 2; // Assuming 'total' is sum of two scores, and we need average. Adjust logic as needed.

  return (
    <div className="score-card">
      <h3>Student Score Details</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>School:</strong> {school}</p>
      <p><strong>Total Score:</strong> {total}</p>
      <p><strong>Goal Score:</strong> {goal}</p>
      <p><strong>Average Score:</strong> {average.toFixed(2)}</p> {/* Display average with 2 decimal places */}
      {average >= goal ? (
        <p className="status-pass">Status: Passed Goal!</p>
      ) : (
        <p className="status-fail">Status: Did not meet Goal.</p>
      )}
    </div>
  );
}

export default CalculateScore;