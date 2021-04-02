import React, { Component } from "react";
import { connect } from "react-redux";
import { updateStudent } from "../store/thunks";

class EditStudent extends Component {
  constructor(props) {
    super(props);
    const { id, firstName, lastName, image, gpa, email } = props;
    this.state = {
      id: id ? id : "",
      firstName: id ? firstName : "",
      lastName: id ? lastName : "",
      email: id ? email : "",
      image: id ? image : "",
      gpa: id ? gpa : 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.setState(this.props.student);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.student && this.props.student.id) {
      this.setState(this.props.student);
    }
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.edit({ ...this.state });
  }

  render() {
    const { fullName } = this.props.student || "";
    const { handleChange, handleSubmit } = this;
    const { firstName, lastName, image, gpa, email } = this.state;

    return (
      <div>
        <h1>Edit {fullName}'s information</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">Student's First name</label>
          <input name="firstName" value={firstName} onChange={handleChange} />
          <label htmlFor="lastName">Last name</label>
          <input name="lastName" value={lastName} onChange={handleChange} />
          <label htmlFor="email">Email address</label>
          <input name="email" value={email} onChange={handleChange} />
          <label htmlFor="image">Image</label>
          <input name="image" value={image} onChange={handleChange} />
          <label htmlFor="gpa">GPA</label>
          <input name="gpa" value={gpa} onChange={handleChange} />
          <button type="submit">Submit your changes</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (
  state,
  {
    match: {
      params: { id },
    },
  }
) => {
  return {
    student: state.students.find((student) => student.id === Number(id)),
  };
};

const mapDispatchToProps = (dispatch, { history }) => ({
  edit: (student) => dispatch(updateStudent(student, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);
