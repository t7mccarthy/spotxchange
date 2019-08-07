import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSpots, buySpot, deleteSpot } from "../../actions/spots";

function Plural(props) {
  const seats = props.seats;
  if (seats > 1) {
    return <span> spots at </span>;
  }
  return <span> spot at </span>;
}

function FormatTime(props) {
  const date_time = props.time;
  var hours24 = parseInt(date_time.slice(11, 13));
  var month = parseInt(date_time.slice(5, 7));
  var day = parseInt(date_time.slice(8, 10)).toString();
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ];
  var AM_PM = "AM";
  var hours = hours24;
  if (hours24 == 0) {
    hours = 12;
  } else if (hours24 == 12) {
    AM_PM = "PM";
  } else if (hours24 > 12) {
    AM_PM = "PM";
    hours = hours24 - 12;
  }
  var minutes = date_time.slice(14, 16);
  return hours
    .toString()
    .concat(":", minutes, " ", AM_PM, " on ", months[month], " ", day);
}

export class Spots extends Component {
  static propTypes = {
    spots: PropTypes.array.isRequired,
    getSpots: PropTypes.func.isRequired,
    buySpot: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getSpots();
  }

  updateSpot(spot, user_id) {
    const {
      id,
      host,
      place,
      seats,
      message,
      owner,
      open_at,
      created_at,
      price
    } = spot;
    var active = false;
    var buyer = user_id;
    const new_spot = {
      id,
      host,
      place,
      seats,
      message,
      owner,
      buyer,
      active,
      open_at,
      created_at,
      price
    };
    this.props.buySpot(spot.id, new_spot);
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    var name = user.username;

    const someone_elses = spot => (
      <a
        href="#"
        className="list-group-item list-group-item-action flex-column align-items-start"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            {spot.seats} <Plural seats={spot.seats} /> {spot.place}
          </h5>
          <button
            // onClick={this.props.buySpot.bind(this, spot.id)}
            onClick={this.updateSpot.bind(this, spot, user.id)}
            type="button"
            className="btn btn-primary btn-sm"
          >
            {" "}
            Buy for ₴{spot.price}{" "}
          </button>
        </div>
        <p className="mb-1">Host's Description: {spot.message}</p>
        <small className="text-muted">
          Available from {spot.host} at <FormatTime time={spot.open_at} />.
        </small>
      </a>
    );

    const mine = spot => (
      <a
        href="#"
        className="list-group-item list-group-item-action flex-column align-items-start active"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            Selling {spot.seats} <Plural seats={spot.seats} /> {spot.place}
          </h5>
          <button
            onClick={this.props.deleteSpot.bind(this, spot.id)}
            type="button"
            className="btn btn-danger btn-sm"
          >
            {" "}
            Cancel Spot{" "}
          </button>
        </div>
        <p className="mb-1">Host's Description: {spot.message}</p>
        <small className="text-muted">
          Exchanging at <FormatTime time={spot.open_at} /> for ₴{spot.price}{" "}
        </small>
      </a>
    );

    return (
      <Fragment>
        <div className="list-group">
          {this.props.spots.map(spot => (
            <div key={spot.id}>
              {name == spot.host ? mine(spot) : someone_elses(spot)}
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

// <!-- <small className="text-muted">₴{spot.price}</small> -->

const mapStateToProps = state => ({
  spots: state.spots.spots,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getSpots, buySpot, deleteSpot }
)(Spots);
