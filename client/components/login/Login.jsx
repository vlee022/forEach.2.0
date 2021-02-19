import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      f_name: '',
      l_name: '',
      email: '',
      password: '',
    };
    this.loginClick = this.loginClick.bind(this);
    this.createClick = this.createClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  loginClick(e) {
    e.preventDefault();
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) this.props.updateUserID(data.userID);
        return data;
      })
      .then((data) => {
        if (data.success === true) {
          this.props.history.push('/account');
        } else {
          alert(data.message);
        }
      })
      .catch((err) => console.log('Login fetch /api/login ERROR: ', err));
  }

  createClick(e) {
    e.preventDefault();
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          this.props.history.push('/account');
        } else {
          alert('Failed to create user');
        }
      })
      .catch((err) => console.log('Login fetch /api/signup ERROR: ', err));
  }

  render() {
    const {
      email,
      password,
      f_name,
      l_name,
    } = this.state;
    return (
      <div className="login-container">
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Email" value={email} onChange={this.onChange} />
        <input type="text" name="password" placeholder="Password" value={password} onChange={this.onChange} />
        <input type="text" name="f_name" placeholder="First Name" value={f_name} onChange={this.onChange} />
        <input type="text" name="l_name" placeholder="Last Name" value={l_name} onChange={this.onChange} />
        <div className="login-buttons">
          <button type="button" onClick={this.loginClick}>Login</button>
          <button type="button" onClick={this.createClick}>Create Account</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
