import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import AllRoutes from '../../routes';
import {
  Header
} from '../Layouts'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Header />
          <AllRoutes/>
        </div>
      </Router>
    );
  }
}

export default App;