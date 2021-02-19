import React, { Component } from 'react';
import Shouts from './Shouts.jsx';

class Shoutouts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoutouts: [], // [ { claps_count: 0, f_name: 'name', l_name: 'name', shoutout: 'hello' } ]
    };
  }

  componentDidMount() {
    fetch('/api/shoutouts')
      .then((res) => res.json())
      .then((data) => this.setState({
        shoutouts: data,
      }))
      .catch((err) => {
        console.log('Homepage.componentDidMount: get shoutouts: ERROR: ', err);
      });
  }

  render() {
    console.log(this.state);
    const { shoutouts } = this.state;
    const shoutList = [];
    for (let i = 0; i < shoutouts.length; i += 1) {
      shoutList.push(<Shouts claps={shoutouts[i].claps_count} f_name={shoutouts[i].f_name} l_name={shoutouts[i].l_name} shoutout={`${shoutouts[i].shoutout}`} />);
    }
    return (
      <div className="shoutouts-container">
        <h2>Shoutouts!</h2>
        <ul>
          {shoutList}
        </ul>
      </div>
    );
  }
}

export default Shoutouts;
