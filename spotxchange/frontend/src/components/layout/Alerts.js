import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error != prevProps.error) {
      if (error.msg.host) alert.error(`Host: ${error.msg.host.join()}`);
      if (error.msg.place) alert.error(`Place: ${error.msg.place.join()}`);
      if (error.msg.message)
        alert.error(`Description: ${error.msg.message.join()}`);
    }

    if (message != prevProps.message) {
      if (message.buySpot) alert.success(message.buySpot);
    }
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
