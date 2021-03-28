import React, { Component } from "react";
import { connect } from "react-redux";
import { setStudent } from "../store/thunks";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      image: "",
      gpa: 3.5,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    const change = {};
    change[evt.target.name] = evt.target.value;
    this.setState(change);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createStudent({ ...this.state });
  }
  render() {
    const { firstName, lastName, image, gpa } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <div id="add-student" className="form">
        <h3>Add a new student!</h3>
        <form className="form-submit" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First name</label>
          <input name="firstName" value={firstName} onChange={handleChange} />
          <label htmlFor="lastName">Last name</label>
          <input name="lastName" value={lastName} onChange={handleChange} />
          <label htmlFor="image">Image</label>
          <input name="image" value={image} onChange={handleChange} />
          <label htmlFor="gpa">GPA</label>
          <input name="gpa" value={gpa} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
        <Link to="/">Cancel</Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  createStudent: (student) => dispatch(setStudent(student, history)),
});

export default withRouter(connect(null, mapDispatchToProps)(AddStudent));
