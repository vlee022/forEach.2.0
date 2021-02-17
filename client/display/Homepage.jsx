import React, { Component } from 'react';
import Navbar from '../components/home/Navbar.jsx';
import Mainstage from '../components/home/Mainstage.jsx';
import Info from '../components/home/Info.jsx';
import TotalDonations from '../components/home/TotalDonations.jsx';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: null,
      firstName: null,
      lastName: null,
    };
    this.mainstageForm = this.mainstageForm.bind(this);
  }

  componentDidMount() {
  }

  mainstageForm(amountInput, firstInput, lastInput) {
    console.log('mainstageForm: amountInput', amountInput);
    this.setState({
      amount: amountInput,
      firstName: firstInput,
      lastName: lastInput,
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Navbar />
        <Mainstage mainstageForm={this.mainstageForm} />
        <div>
          <Info />
          <TotalDonations />
        </div>
      </div>
    );
  }
}

export default Homepage;
