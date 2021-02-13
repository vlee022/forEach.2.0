import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './style.css';

class App extends Component{
    constructor(props) {
      super(props);

      this.state = {};
    }

    componentDidMount() {
        console.log("inside component did mount")
        fetch('/api')
          // .then(console.log('did mount'))
          .then(res => res.json())//on client .json is parsing 
          .then((data) => {
          })
          .catch(err => console.log('get project: ERROR: ', err));
        }
    
render() {

    return (
<div></div>
    )
}

};