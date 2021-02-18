import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    fetch('/api/donations', { /* ********************** NEED TO CHANGE POST ROUTES!!! ********************** */
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(() => {
        this.props.history.push('/account');
      })
      .catch((err) => console.log('Login fetch /donations ERROR: ', err)); /* ********************** NEED TO CHANGE POST ROUTES!!! ********************** */
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const {
      email,
      password,
    } = this.state;
    return (
      <div>
        <input type="email" name="email" placeholder="Email" value={email} onChange={this.onChange} />
        <input type="text" name="password" placeholder="Password" value={password} onChange={this.onChange} />
        <button type="button" onClick={this.handleClick}>Login</button>
        <button type="button" onClick={this.handleClick}>Create Account</button>
      </div>
    );
  }
}

export default Login;
