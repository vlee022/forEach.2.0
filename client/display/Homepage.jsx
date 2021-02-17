import React, { Component } from 'react';
import Navbar from '../components/home/Navbar';
import Mainstage from '../components/home/Mainstage';
import Info from '../components/home/Info';
import TotalDonations from '../components/home/TotalDonations';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <Navbar />
        <Mainstage />
        <div>
          <Info />
          <TotalDonations />
        </div>
      </div>
    );
  }
}

export default Homepage;
