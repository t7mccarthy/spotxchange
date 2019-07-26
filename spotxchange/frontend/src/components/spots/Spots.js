import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSpots } from "../../actions/spots";

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
  return hours.toString().concat(":", minutes, " ", AM_PM);
}

export class Spots extends Component {
  static propTypes = {
    spots: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getSpots();
  }

  render() {
    return (
      <Fragment>
        <div className="list-group">
          {this.props.spots.map(spot => (
            <a
              href="#"
              className="list-group-item list-group-item-action flex-column align-items-start"
              key={spot.id}
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">
                  {spot.seats} <Plural seats={spot.seats} /> {spot.place}
                </h5>
                <button type="button" className="btn btn-primary btn-sm">
                  {" "}
                  Buy for ₴{spot.price}{" "}
                </button>
              </div>
              <p className="mb-1">TODO: Description...</p>
              <small className="text-muted">
                Available from {spot.host} at <FormatTime time={spot.open_at} />
                .
              </small>
            </a>
          ))}
        </div>
      </Fragment>
    );
  }
}

// <!-- <small className="text-muted">₴{spot.price}</small> -->

const mapStateToProps = state => ({
  spots: state.spots.spots
});

export default connect(
  mapStateToProps,
  { getSpots }
)(Spots);
