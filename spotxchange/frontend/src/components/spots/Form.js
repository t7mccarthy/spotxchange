import React, { Component } from "react";
import { connect } from "react-redux";
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

  state = {
    host: "",
    place: "",
    seats: 1,
    message: "",
    open_at: this.getDateTime(),
    price: 10
  };

  static propTypes = {
    addSpot: PropTypes.func.isRequired
  };

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
    // location.reload();
  };

  render() {
    const { host, place, seats, message, open_at, price } = this.state;
    return (
      <div>
        <h2>Exchange Spots</h2>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <div className="form-group">
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
    );
  }
}

export default connect(
  null,
  { addSpot }
)(Form);
