import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (auth.isLoading) {
        return (
          <div className="text-center">
            <div
              className="spinner-border"
              style={{ width: 70, height: 70 }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
            <div style={{ paddingTop: 30 }}>
              <strong>Loading...</strong>
            </div>
          </div>
        );
      } else if (!auth.isAuthenticated) {
        return <Redirect to="/login" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
