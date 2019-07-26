import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import Dashboard from "./spots/Dashboard";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div style={{ paddingTop: 30, paddingLeft: 30, paddingRight: 30 }}>
          <Dashboard />
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
