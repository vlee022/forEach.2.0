import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

class App extends Component{
    constructor(props) {
      super(props);
      this.state = {};
    }

    componentDidMount() {
        console.log("inside component did mount")
        fetch('/getDonations')
          .then(res => res.json())
          .then((totals) => {

          })
          .catch(err => console.log('get project: ERROR: ', err));
        }
    
render() {

    return (
        <div>
            <div className="main">
                <h1>Codesmith Alumni Scholarship</h1>
                <p>info about scholarship info about scholarship info about scholarship info about scholarship info about scholarship info about scholarship</p>   
                <h3 id="totalHomePage">Total Raised ${total}</h3>
            </div>
                <div className="btn">
                    <button id="donateHome"> Donate </button>
                    <button id="applyHome">Apply</button>  
                </div>
        </div>
    )
}

};

export default App;