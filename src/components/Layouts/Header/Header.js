import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'

import './Header.css'

class Header extends Component {
  render () {
    const { pathname } = this.props.location;

    return (
			<header>
        <div className="top-header">
        </div>
        <nav className="header-menu">
          <div className="container">
            <ul className="nav navbar">
              <li className={ pathname==='/' ? 'active' : null}>
                <Link to='/'>Home</Link>
              </li>
              <li className={ pathname==='/about' ? 'active' : null}>
                <Link to='/about'>About</Link>
              </li>
            </ul>
          </div>
        </nav>
			</header>
    )
  }
}

export default withRouter(Header)
