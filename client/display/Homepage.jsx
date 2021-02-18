import React, { Component } from 'react';
import Mainstage from '../components/home/Mainstage.jsx';
import Info from '../components/home/Info.jsx';
import TotalDonations from '../components/home/TotalDonations.jsx';
import Payments from '../components/payments/Payments.jsx';
import Login from '../components/login/Login.jsx';
import Navbar from '../components/home/Navbar.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Mainstage mainstageForm={this.mainstageForm} />
              <div className="home-bottom">
                <Info />
              </div>
            </Route>
            <Route path="/donate" exact component={Payments} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Homepage;