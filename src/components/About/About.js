import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import './About.css';

class  About extends Component {
    
    render () {
        return (
            <h1> About Page </h1>
        )
    }
}

export default withRouter(About)