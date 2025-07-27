import React from 'react';
import styles from './CohortDetails.module.css'; // Import the CSS Module [cite: 34]

function CohortsDetails({ cohort }) {
  // Define the style for <h3> element based on cohort status [cite: 36]
  const cohortStatusColor = cohort.status === 'Ongoing' ? 'green' : 'blue';

  return (
    <div className={styles.box}> {/* Apply the box class to the container div [cite: 35] */}
      <h3 style={{ color: cohortStatusColor }}> {/* Apply inline style for color [cite: 36] */}
        {cohort.name} - {cohort.program}
      </h3>
      <dl>
        <dt>Started On</dt>
        <dd>{cohort.startDate}</dd>
        <dt>Current Status</dt>
        <dd>{cohort.status}</dd>
        <dt>Coach</dt>
        <dd>{cohort.coach}</dd>
        <dt>Trainer</dt>
        <dd>{cohort.trainer}</dd>
      </dl>
    </div>
  );
}

export default CohortsDetails;