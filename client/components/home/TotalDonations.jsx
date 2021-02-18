import React from 'react';

const TotalDonations = (props) => (
  <div>
    <h2 className="total-donations">
      $100
    </h2>
    <div className="bar">---</div>
    <div className="donors">
      <p>
        <span>10</span>
        <span>donors</span>
      </p>
    </div>
    <div>
      <div>
        <img alt="testing" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        <div>
          <h3>Annonymous</h3>
          <p>$5</p>
        </div>
      </div>
    </div>
  </div>
);

export default TotalDonations;
