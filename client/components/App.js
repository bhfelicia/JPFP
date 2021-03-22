import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
//import any sub-components
import Navbar from "./Navbar";

class App extends Component {
  //constructor to initialize state
  constructor() {
    super();
  }

  //any lifecycle methods
  //any custom methods
  render() {
    return (
      <Router>
        <div id="app">
          <Navbar />
        </div>
      </Router>
    );
  }
  //render
}

export default connect(mapStateToProps)(App);
