import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  //   static propTypes = {second: third}

  render() {
    return (
      <><nav className="navbar fixed-top  navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">News App</Link>
          <button className="navbar-to=ggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="to=ggle navigation">
            <span className="navbar-to=ggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto=">
              <li className="nav-item ">
                <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/General">General</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">Health</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">Science </Link>  </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports ">Sports </Link> </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link> </li>

            </ul>

          </div>
        </div>
      </nav></>
    )
  }
}
