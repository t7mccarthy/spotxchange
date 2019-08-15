import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { getProfile, updateProfile } from "../../actions/profile";

export class ProfileEdit extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    updateProfile: PropTypes.func.isRequired,
    getProfile: PropTypes.func.isRequired,
    profile: PropTypes.array.isRequired
  };

  state = {
    user: "",
    location: "",
    balance: ""
  };

  componentDidMount() {
    // this.props.getProfile(this.props.match.params.id);
    this.props.getProfile();
    // console.log("setting1", this.props.getProfile());
    // // const { user, location, balance } = this.props.profile[0];
    // // console.log("setting1", user, location, balance);
    // console.log("setting2", this.props.profile);
    // this.setState({
    //   user: user,
    //   location: location,
    //   balance: balance
    // });
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    // this.props.updateProfile(this.props.match.params.id, formValues);

    e.preventDefault();
    const { user, location, balance } = this.state;
    var id = this.props.profile[0]["id"];
    const profile = { id, user, location, balance };
    this.props.updateProfile(user, profile);
    this.setState({
      user: "",
      location: "",
      balance: ""
    });
    // return <Redirect to="/" />;
    // location.reload();
  };

  render() {
    // const { isAuthenticated, user } = this.props.auth;
    // var  = user.username;
    // console.log("logging profile", this.props.profile);
    // console.log("logging get_profile", this.props.getProfile());
    // console.log("logging state", this.state);
    // var user = this.props.profile[0]["user"];
    // var location = this.props.profile[0]["location"];
    // var balance = this.props.profile[0]["balance"];

    const { user, location, balance } = this.state;
    // this.setState({
    //   user: user,
    //   location: location,
    //   balance: balance
    // });
    // console.log(user, location, balance);
    return (
      <div className="col-md-6 m-auto" style={{ paddingBottom: 100 }}>
        <div className="card card-body mt-5">
          <h2>Update Profile</h2>
          <form onSubmit={this.onSubmit}>
            <fieldset>
              <div className="form-group">
                <label>User</label>
                <input
                  type="text"
                  className="form-control"
                  name="user"
                  onChange={this.onChange}
                  value={user}
                />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  onChange={this.onChange}
                  value={location}
                />
              </div>
              <div className="form-group">
                <label>Balance</label>
                <input
                  type="number"
                  className="form-control"
                  name="balance"
                  onChange={this.onChange}
                  value={balance}
                />
              </div>
              <center>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </center>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile.profile
});

export default connect(
  mapStateToProps,
  { getProfile, updateProfile }
)(ProfileEdit);
