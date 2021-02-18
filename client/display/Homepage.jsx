import React, { Component } from 'react';
import Navbar from '../components/home/Navbar.jsx';
import Mainstage from '../components/home/Mainstage.jsx'; 
import Info from '../components/home/Info.jsx' 
import TotalDonations from '../components/home/TotalDonations.jsx'

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
