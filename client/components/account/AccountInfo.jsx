/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import SideBar from './SideBar.jsx';

class AccountInfo extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      donations: [],
      shoutouts: [],
    };
  }

  componentDidMount() {
    const { userID } = this.props;
    console.log('userID:', userID);
    fetch(`/api/accountDetails/${userID}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        const user = data.user ? data.user : {};
        const donations = data.donations ? data.donations : [];
        const shoutouts = data.shoutouts ? data.shoutouts : [];
        this.setState(() => ({
          user,
          donations,
          shoutouts,
        }));
      })
      .catch((err) => console.log(err));
  }

  render() {
    const donations = this.state.donations.map((donation, index) => (
      <div className="donations-table" key={`donation${index}`}>
        <div className="table-cell">{`$${donation.amount}`}</div>
        <div className="table-cell">{donation.donation_date.slice(0, 10)}</div>
      </div>
    ));
    const shoutouts = this.state.shoutouts.map((shout, index) => (
      <div className="shoutouts-table" key={`shoutout${index}`}>
        <div className="table-cell">{shout.shoutout}</div>
        <div className="table-cell">{shout.claps_count}</div>
      </div>
    ));
    return (
      <div className="account-details">
        <SideBar />
        <div className="user-details">
          <h2>{`Welcome ${this.state.user.f_name}!`}</h2>
          <h3>Past Donations:</h3>
          <div className="donations-table">
            <div className="table-cell">Amount</div>
            <div className="table-cell">Date</div>
          </div>
          {donations}
          <h3>Shoutouts History:</h3>
          <div className="shoutouts-table">
            <div className="table-cell">Shoutout</div>
            <div className="table-cell">Claps</div>
          </div>
          {shoutouts}
        </div>
      </div>
    );
  }
}

export default AccountInfo;
