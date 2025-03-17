import React from 'react'
import { Link } from 'react-router-dom'

const MyNavbar = () => {
  return (
    <div>
    <header className="">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="index.html"><h2>E <em>Web</em></h2></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home
                </Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="service">Service</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </div>
  )
}

export default MyNavbar
