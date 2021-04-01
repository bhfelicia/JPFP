import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { unenrollStudent } from "../store/thunks";

const SingleCampus = ({ campus, unregisterStudent }) => {
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
        {campus.students
          ? campus.students.map((student) => (
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
};

const mapStateToProps = ({ campuses }, otherProps) => {
  const campus = campuses.find(
    (campus) => campus.id === Number(otherProps.match.params.id)
  );
  return { campus };
};

const mapDispatchToProps = (dispatch, { history }) => ({
  unregisterStudent: (student) => dispatch(unenrollStudent(student, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
