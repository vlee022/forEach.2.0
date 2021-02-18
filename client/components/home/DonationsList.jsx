import React from 'react';

const DonationsList = (props) => {
  const { f_name, l_name, amount } = props;
  return (
    <li>
      <div className="donors">
        <p className="donor-name">
          <span>{`${f_name} `}</span>
          <span>{l_name}</span>
        </p>
        <p className="amount">${amount}</p>
      </div>
    </li>
  );
};

export default DonationsList;
