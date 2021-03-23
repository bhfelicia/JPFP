import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import { fetchStudents, fetchCampuses } from "../store/thunks";
//import any sub-components
import Navbar from "./Navbar";
import Students from "./Students";
import Campuses from "./Campuses";

class App extends Component {
  componentDidMount() {
    this.props.getStudents();
    this.props.getCampuses();
  }
  render() {
    return (
      <Router>
        <div id="app">
          <div>
            <Navbar />
            <hr />
          </div>
          <Switch>
            <Route path="/students" component={Students} />
            <Route path="/campuses" component={Campuses} />
          </Switch>
        </div>
      </Router>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  getStudents: () => dispatch(fetchStudents()),
  getCampuses: () => dispatch(fetchCampuses()),
});
export default connect(null, mapDispatchToProps)(App);
