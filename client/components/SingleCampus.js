import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { unenrollStudent } from "../store/thunks";

class SingleCampus extends Component {
  constructor(props) {
    super(props);
    const { id, name, imageUrl, address, description } = props;
    this.state = {
      id: id ? id : "",
      name: id ? name : "",
      imageUrl: id ? imageUrl : "",
      address: id ? address : "",
      description: id ? description : "",
    };
  }
  // componentDidMount() {
  //   this.setState(this.props.campus);
  // }

  // componentDidUpdate(prevProps) {
  //   if (!prevProps.campus && this.props.campus.id) {
  //     this.setState(this.props.campus);
  //   }
  // }

  render() {
    console.log("state is: ", this.state);
    const { campus, unregisterStudent, students } = this.props;
    if (!campus) {
      return null;
    }
    return (
      <div className="singular">
        <h1>{campus.name}</h1>
        <img src={campus.imageUrl}></img>
        <h2>{campus.address}</h2>
        <p>{campus.description}</p>
        <ol>
          {students
            ? students.map((student) => (
                <div key={student.id}>
                  <Link to={`/students/${student.id}`}>
                    <li>{student.fullName}</li>
                  </Link>
                  <button onClick={() => unregisterStudent(student)}>
                    Unregister
                  </button>
                </div>
              ))
            : ""}
        </ol>
        <Link to={`/campuses/${campus.id}/edit`}>Update this campus</Link>
      </div>
    );
  }
}
// ({ campus, unregisterStudent }) => {
//   if (!campus) {
//     return null;
//   }
//   return (

//   );
// };

const mapStateToProps = ({ campuses, students }, otherProps) => {
  const campus = campuses.find(
    (campus) => campus.id === Number(otherProps.match.params.id)
  );

  const theStudents = campus.id
    ? students.filter((student) => student.campusId === campus.id)
    : [];
  return { campus, students: theStudents };
};

const mapDispatchToProps = (dispatch) => ({
  unregisterStudent: (student) => dispatch(unenrollStudent(student)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
