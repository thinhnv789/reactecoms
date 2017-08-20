import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Home.css';

class  Home extends Component {
  render () {
      return (
          <div>
              <h1> Home Page </h1>
          </div>
      )
  }
}

export default withRouter(Home)