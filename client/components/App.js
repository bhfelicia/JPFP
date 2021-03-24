import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import { fetchStudents, fetchCampuses } from "../store/thunks";
//import any sub-components
import Navbar from "./Navbar";
import Students from "./Students";
import Campuses from "./Campuses";
import SingleCampus from "./SingleCampus";
import SingleStudent from "./SingleStudent";

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
            <Route exact path="/students" component={Students} />
            <Route exact path="/campuses" component={Campuses} />
            <Route path="/campuses/:id" component={SingleCampus} />
            <Route path="/students/:id" component={SingleStudent} />
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
