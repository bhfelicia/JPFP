import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Students from "./Students";
import { fetchStudents } from "../store/thunks";
//import any sub-components
import Navbar from "./Navbar";

class App extends Component {
  componentDidMount() {
    this.props.getStudents();
  }
  render() {
    return (
      <Router>
        <div id="app">
          <div>
            <Navbar />
          </div>
          <Switch>
            <Route path="/students" component={Students} />
          </Switch>
        </div>
      </Router>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  getStudents: () => dispatch(fetchStudents()),
});
export default connect(null, mapDispatchToProps)(App);
