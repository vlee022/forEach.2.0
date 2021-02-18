import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Mainstage extends React.Component {
  constructor(props) {
    super(props);
  }

  // fillForm(e) {
  //   e.preventDefault();
  //   console.log('fillForm event target', e.target.amount.value);
  //   this.props.mainstageForm(
  //     e.target.amount.value,
  //     e.target.firstName.value,
  //     e.target.lastName.value,
  //   );
  // }

  // onClick(e) {
  //   e.preventDefault();
  //   console.log('mainstage onClick amount ===>', document.getElementById('amount').value);
  //   this.props.mainstageForm(
  //     document.getElementById('amount').value,
  //     document.getElementById('firstName').value,
  //     document.getElementById('lastName').value,
  //   );
  // }

  render() {
    return (
      <div>
        <img alt="" src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
        <div>
          <h2>Donate to an aspiring software engineer</h2>
          {/* <form onSubmit={this.fillForm.bind(this)}> */}
          <form>
            {/* <input id="amount" type="text" name="amount" placeholder="Donation Amount" />
            <input id="firstName" type="text" name="firstName" placeholder="First Name" />
            <input id="lastName" type="text" name="lastName" placeholder="Last Name" /> */}
            <Link to="/donate">
              <button type="submit" value="Submit">Donate now!</button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Mainstage;
