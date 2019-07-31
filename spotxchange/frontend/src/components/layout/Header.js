import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      // <nav className="navbar navbar-expand-sm navbar-light bg-light">
      //   <div className="container">
      //     <button
      //       className="navbar-toggler"
      //       type="button"
      //       data-toggle="collapse"
      //       data-target="#navbarTogglerDemo01"
      //       aria-controls="navbarTogglerDemo01"
      //       aria-expanded="false"
      //       aria-label="Toggle navigation"
      //     >
      //       <span className="navbar-toggler-icon"></span>
      //     </button>
      //     <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      //       <a className="navbar-brand" href="#">
      //         spotXchange
      //       </a>
      //     </div>
      //     Spots
      //   </div>
      // </nav>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          spotXchange
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Explore <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Spots
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Exchange
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                History
              </a>
            </li>
          </ul>
          <ul className="navbar-nav my-2 my-lg-0">
            <li className="nav-item">
              <Link to="/register" className="nav-link" href="#">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link" href="#">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
