import React, { Component } from 'react';
import Homepage from './display/Homepage.jsx';
import './styles.css';



// Clean up App Component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Homepage />
      </div>
    );
  }
}

export default App;
