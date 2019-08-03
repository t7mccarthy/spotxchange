import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { addSpot } from "../../actions/spots";

export class Form extends Component {
  getDateTime() {
    var today = new Date();
    var year = today.getFullYear().toString();
    var month = today.getMonth().toString();
    if (month.length == 1) {
      month = "0" + month;
    }
    var day = today.getDate().toString();
    if (day.length == 1) {
      day = "0" + day;
    }
    var hour = today.getHours().toString();
    if (hour.length == 1) {
      hour = "0" + hour;
    }
    var minute = today.getMinutes().toString();
    if (minute.length == 1) {
      minute = "0" + minute;
    }
    return year + "-" + month + "-" + day + "T" + hour + ":" + minute;
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    addSpot: PropTypes.func.isRequired
  };

  state = {
    host: "",
    place: "",
    seats: "",
    message: "",
    open_at: "",
    price: "10"
  };

  componentDidMount() {
    const { isAuthenticated, user } = this.props.auth;
    var name = user.username;
    this.setState({
      host: name,
      place: "",
      seats: 1,
      message: "",
      open_at: this.getDateTime(),
      price: 10
    });
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { host, place, seats, message, open_at, price } = this.state;
    const spot = { host, place, seats, message, open_at, price };
    this.props.addSpot(spot);
    this.setState({
      host: "",
      place: "",
      seats: 1,
      message: "",
      open_at: this.getDateTime(),
      price: 10
    });
    return <Redirect to="/" />;
    // location.reload();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    var name = user.username;
    const { host, place, seats, message, open_at, price } = this.state;
    return (
      <div className="col-md-6 m-auto" style={{ paddingBottom: 100 }}>
        <div className="card card-body mt-5">
          <h2>Exchange Spots</h2>
          <form onSubmit={this.onSubmit}>
            <fieldset>
              <div hidden className="form-group">
                <label>Host</label>
                <input
                  type="text"
                  className="form-control"
                  name="host"
                  onChange={this.onChange}
                  value={host}
                />
              </div>
              <div className="form-group">
                <label>Place</label>
                <input
                  type="text"
                  className="form-control"
                  name="place"
                  onChange={this.onChange}
                  value={place}
                />
              </div>
              <div className="form-group">
                <label>Number of Seats</label>
                <input
                  type="number"
                  className="form-control"
                  name="seats"
                  onChange={this.onChange}
                  value={seats}
                />
              </div>
              <div className="form-group">
                <label>Time Available</label>
                <input
                  className="form-control"
                  type="datetime-local"
                  name="open_at"
                  onChange={this.onChange}
                  value={open_at}
                />
              </div>
              <div className="form-group">
                <label>Spot Description</label>
                <textarea
                  rows="2"
                  className="form-control"
                  name="message"
                  onChange={this.onChange}
                  value={message}
                  placeholder="Tell everyone a little about your spot..."
                ></textarea>
              </div>
              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  onChange={this.onChange}
                  value={price}
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
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addSpot }
)(Form);
