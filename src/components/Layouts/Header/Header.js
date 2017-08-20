import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'

import './Header.css'

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      menuShow: false
    }
  }

  setToggleMenu = () => {
    this.setState({
      menuShow: !this.state.menuShow
    })
  }

  navToPage = () => {
    this.setState({
      menuShow: false
    })
  }
  
  render () {
    const { pathname } = this.props.location;
    const { menuShow } = this.state;

    return (
			<header>
        <div className="top-header">
          <button className="navbar-toggle" onClick={this.setToggleMenu}>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
        <nav className={`header-menu ${menuShow ? 'toggle' : 'collapse'}`}>
          <div className="container">
            <ul className="nav navbar">
              <li className={ pathname==='/' ? 'active' : null} onClick={this.navToPage}>
                <Link to='/'>Home</Link>
              </li>
              <li className={ pathname==='/about' ? 'active' : null} onClick={this.navToPage}>
                <Link to='/about'>About</Link>
              </li>
            </ul>
          </div>
        </nav>
        {
          menuShow && <div className="shadow-layer" />
        }
			</header>
    )
  }
}

export default withRouter(Header)
