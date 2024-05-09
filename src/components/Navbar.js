import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Contact
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/Contact">New Contact</Link></li>
                <li><Link className="dropdown-item" to="/Contact">Missed Calls</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/Contact">Dialed Call</Link></li>
                <li><Link className="dropdown-item" to="/Contact">messages</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link enabled" aria-disabled="true"  to="/Account">Log in</Link>
            </li>
            <li className=" nav-item">
              <Link className="nav-link enabled" aria-disabled="true"  to="/Account">Sign Up</Link>
            </li>   */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-primary" type="submit">Submit</button>
          </form> */}
          
          <div className={`form-check form-switch mx-5 text-${props.mode==='light'?'dark':'light'}`} >
              <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title : PropTypes.string.isRequired, 
  aboutText : PropTypes.string
}
Navbar.defaultProps = {
  title : 'set title here',
  aboutText : 'About Us'
}