import React from 'react';
import DonationsList from './DonationsList.jsx';

const TotalDonations = (props) => {
  console.log('donations', props.donations);
  const donationsList = [];
  const { totals, donations } = props;
  let count = 0;
  for (let i = 0; i < donations.length; i++) {
    count++;
    donationsList.push(<DonationsList key={`${i}`} f_name={`${donations[i].f_name}`} l_name={`${donations[i].l_name}`} amount={`${donations[i].amount}`} />);
  }
  return (
    <div className="donations-container">
      <h2 className="total-donations">
        {`$${totals} Raised`}
      </h2>
      <p>
        <span>{`${count} `}</span>
        <span>donors</span>
      </p>
      <div>
        <ul className="donations-list">
          {donationsList}
        </ul>
      </div>
    </div>
  );
};

export default TotalDonations;
