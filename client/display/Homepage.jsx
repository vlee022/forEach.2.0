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
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Mainstage />
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
