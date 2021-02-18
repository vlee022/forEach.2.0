import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mainstage from '../components/home/Mainstage.jsx';
import Info from '../components/home/Info.jsx';
import TotalDonations from '../components/home/TotalDonations.jsx';
import Payments from '../components/payments/Payments.jsx';
import Login from '../components/login/Login.jsx';
import Navbar from '../components/home/Navbar.jsx';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: null,
      f_name: null,
      l_name: null,
      donations: [],
      totals: 0,
    };
    this.mainstageForm = this.mainstageForm.bind(this);
  }

  componentDidMount() {
    fetch('/api/donations')
      .then((res) => res.json())
      .then((data) => this.setState({
        donations: data,
      }))
      .catch((err) => {
        console.log('Homepage.componentDidMount: get donations: ERROR: ', err);
      });

    fetch('/api/donations/total')
      .then((res) => res.json())
      .then((data) => this.setState({
        totals: data,
      }))
      .catch((err) => {
        console.log('Homepage.componentDidMount: get totals: ERROR: ', err);
      });
  }

  mainstageForm(amountInput, firstInput, lastInput) {
    console.log('mainstageForm: amountInput', amountInput);
    this.setState({
      amount: amountInput,
      f_name: firstInput,
      l_name: lastInput,
    });
  }

  render() {
    console.log(this.state);
    const { donations, totals } = this.state;
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Mainstage mainstageForm={this.mainstageForm} />
              <div className="home-bottom">
                <Info />
                <TotalDonations donations={donations} totals={totals} />
              </div>
            </Route>
            <Route path="/donate" component={Payments} />
            <Route path="/login" component={Login} />
            {/* <Route path="/shoutouts" component={Shoutouts} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Homepage;
