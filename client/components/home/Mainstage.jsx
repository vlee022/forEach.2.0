import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Mainstage extends React.Component {
  constructor(props) {
    super(props);
  }

  fillForm(e) {
    e.preventDefault();
    console.log('fillForm event target', e.target.amount.value);
    this.props.mainstageForm(
      e.target.amount.value,
      e.target.firstName.value,
      e.target.lastName.value,
    );
  }

  render() {
    return (
      <div>
        <img alt="" src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
        <div>
          <h2>Donate to an aspiring software engineer</h2>
          <form onSubmit={this.fillForm.bind(this)}>
            <input type="text" name="amount" placeholder="Donation Amount" />
            <input type="text" name="firstName" placeholder="First Name" />
            <input type="text" name="lastName" placeholder="Last Name" />
            {/* <Link to="/donate"> */}
              <input type="submit" value="Submit" />
            {/* </Link> */}
          </form>
        </div>
      </div>
    );
  }
}

export default Mainstage;
