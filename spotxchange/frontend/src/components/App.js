import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from "./layout/Header";
import Dashboard from "./spots/Dashboard";
import Alerts from "./layout/Alerts";
import Login from "./accounts/Login";
import Register from "./accounts/Register";

import { Provider } from "react-redux";
import store from "../store";

// Alert Options
const alertOptions = {
  timeout: 5000,
  position: "top center"
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Alerts />
              <Header />
              <div
                style={{ paddingTop: 30, paddingLeft: 30, paddingRight: 30 }}
              >
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
