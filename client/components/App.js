import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import { fetchStudents, fetchCampuses } from "../store/thunks";
//import any sub-components
import Navbar from "./Navbar";
import Students from "./Students";
import SingleStudent from "./SingleStudent";
import EditStudent from "./EditStudent";
import Campuses from "./Campuses";
import SingleCampus from "./SingleCampus";
import EditCampus from "./EditCampus";

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
            <Route exact path="/students/:id" component={SingleStudent} />
            {/* <Route path="/students/:id/edit" component={EditStudent} /> */}
            <Route exact path="/campuses" component={Campuses} />
            <Route exact path="/campuses/:id" component={SingleCampus} />
            <Route path="/campuses/:id/edit" component={EditCampus} />
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
