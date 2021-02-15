import React from 'react';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './stylesheets/styles.css';


class Donations extends Component {
    constructor() {
        super();
        this.state = {
            donation: {


            },
            user: {

            }
        };
        this.handleClick = this.handleClick.bind(this);

    }


    handleClick(event) {
        const donations = { name, donationAmount, creditCard, phone, date, email };

        preventDefault(event);
        fetch('/donate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(donations)
        })

    }
    render() {

        return (
            <div>
                <form>
                    <input type="text" id="nameInput">name </input>
                    <input type="text" id="donationAmount"> donation amount </input>
                    <input type="text" id="creditCard"> creditcard </input>
                    <input type="text" id="numer"> phone number </input>
                    <input type="text" id="date"> date </input>
                    <input type="text" id="email"> email </input>
                    <input type="checkbox">Would you like to become a member?</input>
                    <input type="text" id="username"> username </input>
                    <input type="text" id="password"> password </input>
                    <button onClick={this.handleClick}>Submit</button>
                </form>
            </div>

        )
    }
}