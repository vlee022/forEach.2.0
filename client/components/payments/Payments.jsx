import React, { Component } from 'react';

class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: null,
      f_name: '',
      l_name: '',
      billing_cc_num: null,
      billing_cvv: null,
      billing_mm: null,
      billing_yy: null,
      billing_country: '',
      billing_zip_code: null,
      billing_name_on_card: '',
      phone_num: null,
      email: '',
      password: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('handle submit');
    console.log('state after handleClick evt ===> ', this.state);
    fetch('/api/donations', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(() => {
        this.props.history.push('/shoutouts');
      })
      .catch((err) => console.log('Payments fetch /donations ERROR: ', err));
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    console.log('state', this.state);
    const {
      f_name,
      l_name,
      amount,
      billing_cc_num,
      billing_cvv,
      billing_mm,
      billing_yy,
      billing_country,
      billing_zip_code,
      billing_name_on_card,
      phone_num,
      email,
      password,
    } = this.state;
    return (
      <div>
        <input type="text" name="f_name" placeholder="First Name" value={f_name} onChange={this.onChange} />
        <input type="text" name="l_name" placeholder="Last Name" value={l_name} onChange={this.onChange} />
        <input type="number" name="amount" placeholder="Donation Amount" value={amount} onChange={this.onChange} />
        <input type="number" name="billing_cc_num" placeholder="Card Number" value={billing_cc_num} onChange={this.onChange} />
        <input type="number" name="billing_cvv" placeholder="CVV" value={billing_cvv} onChange={this.onChange} />
        <input type="number" name="billing_mm" placeholder="Expiration Month" value={billing_mm} onChange={this.onChange} />
        <input type="number" name="billing_yy" placeholder="Expiration Year" value={billing_yy} onChange={this.onChange} />
        <input type="text" name="billing_country" placeholder="Billing Country" value={billing_country} onChange={this.onChange} />
        <input type="number" name="billing_zip_code" placeholder="Zip Code" value={billing_zip_code} onChange={this.onChange} />
        <input type="text" name="billing_name_on_card" placeholder="Name on Card" value={billing_name_on_card} onChange={this.onChange} />
        <input type="number" name="phone_num" value={phone_num} placeholder="Phone Number" onChange={this.onChange} />
        <input type="email" name="email" placeholder="Email" value={email} onChange={this.onChange} />
        <input type="text" name="password" placeholder="Password" value={password} onChange={this.onChange} />
        <button type="button" onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default Payments;
