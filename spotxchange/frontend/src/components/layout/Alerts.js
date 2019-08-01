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
      if (error.msg.non_field_errors)
        alert.error(error.msg.non_field_errors.join());
      if (error.msg.username) alert.error(error.username.join());
    }

    if (message != prevProps.message) {
      if (message.buySpot) alert.success(message.buySpot);
      if (message.addSpot) alert.success(message.addSpot);
      if (message.passwordsNotMatch) alert.error(message.passwordsNotMatch);
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
