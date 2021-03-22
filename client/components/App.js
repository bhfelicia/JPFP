import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
//import any sub-components
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div id="app">
          <Navbar />
        </div>
      </Router>
    );
  }
}

export default App;
