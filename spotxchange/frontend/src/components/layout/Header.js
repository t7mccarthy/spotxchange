import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { getProfile } from "../../actions/profile";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    getProfile: PropTypes.func.isRequired,
    profile: PropTypes.array.isRequired
  };

  componentDidMount() {
    const { isAuthenticated, user } = this.props.auth;
    this.props.getProfile();
  }

  check_reload(isAuthenticated, profile) {
    if (isAuthenticated) {
      if (!profile) {
        // location.reload();
        return;
      }
    }
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    // var profile = console.log(this.props.profile[0]);
    // var profile = this.props.getProfile(user.username);
    const authLinks = (
      <ul className="navbar-nav my-2 my-lg-0">
        <span className="navbar-text mr-3">
          <strong>
            {user ? `${user.username}: ` : ""}
            {this.props.profile[0]
              ? `₴${this.props.profile[0]["balance"]}`
              : ""}
            {this.check_reload(isAuthenticated, this.props.profile[0])}
          </strong>
        </span>
        <li className="nav-item">
          <button
            onClick={this.props.logout}
            className="nav-link btn btn-link btn-sm"
          >
            Logout
          </button>
        </li>
      </ul>
    );

    const guestLinks = (
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
    );

    return (
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
            <li className="nav-item">
              <a className="nav-link" href="#">
                Explore
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Spots
              </a>
            </li>
            <li className="nav-item">
              <Link to="/exchange_spot" className="nav-link" href="#">
                Exchange
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                History
              </a>
            </li>
          </ul>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout, getProfile }
)(Header);
