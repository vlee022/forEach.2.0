import React from 'react';

const TotalDonations = (props) => {
  console.log('donations', props.donations);
  let count = 0;
  props.donations.forEach((el) => {
    count++;
  });
  return (
    <div className="donations-container">
      <h2 className="total-donations">
        $100
      </h2>
      <p>
        <span>{count}</span>
        <span>donors</span>
      </p>
      <div>
        <div>
          <div>
            <h3>Annonymous</h3>
            <p>$5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalDonations;
