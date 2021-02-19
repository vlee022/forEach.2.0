import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/mainstage.jpg';

class Mainstage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainstage">
        <img alt="" src={image} />
        <div className="mainstageBox">
          <h2>Donate to an aspiring software engineer</h2>
          <Link to="/donate">
            <button type="submit" value="Submit">Donate now!</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Mainstage;
