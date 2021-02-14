import React, { Component } from 'react';

class App extends Component{
    constructor(props) {
      super(props);

      this.state = {};
    }

    componentDidMount() {
        console.log("inside component did mount")
        fetch('/api')
          .then(res => res.json())
          .then((data) => {

          })
          .catch(err => console.log('get project: ERROR: ', err));
        }
    
render() {

    return (
        <div>
            <div className="main">
                <h1>Codesmith Alumni Scholarship</h1>
                <p>info about scholarship info about scholarship info about scholarship info about scholarship info about scholarship info about scholarship</p>   
                <h3 id="totalHomePage">Total Raised $</h3>
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