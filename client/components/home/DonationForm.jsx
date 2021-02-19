import React from 'react';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


class Donations ex            donationAmount : '', 
t                  username: '',
 password: '',
      o (event);
  t    e              this.setState({
                  this.setState({
     .T
                  this.setState({
                    ...this.state,
                    nameInput: evt.target.value
                });
            }}> date </input>
                      
                    <input type="text" id="email" onChange={(evt) => {
                  this.setState({
                    ...this.state,
                    email: evt.target.value
                });
            }}> email </input>
                      
                    <input type="checkbox"onChange="">Would you like to become a member?</input>


                    <input type="text" id="username" onChange={(evt) => {
                  this.setState({
                    ...this.state,
                    username: evt.target.value
                });
            }}> username </input>
                      
                    <input type="text" id="password" onChange={(evt) => {
                  this.setState({
                    ...this.state,
                    password: evt.target.value
                });
            }}> password </input>
                      
                    <button onClick={this.handleClick}>Submit</button>
                </form>
            </div>

        )
    }
};

export default Donations