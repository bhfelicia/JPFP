import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AddStudent from "./AddStudent";
import { destroyStudent } from "../store/thunks";

const Students = ({ students, deleteStudent }) => {
  return (
    <div className="widgets">
      <AddStudent />
      {students.map((student) => {
        return (
          <Link to={`/students/${student.id}`} key={`${student.id}`}>
            <img src={student.image}></img>
            <h2>{student.fullName}</h2>
            <h3>
              Studies at {student.campus ? student.campus.name : "unknown"}
            </h3>
            <button onClick={() => deleteStudent(student)}>X</button>
          </Link>
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ students }) => ({
  students,
});

const mapDispatchToProps = (dispatch, { history }) => ({
  deleteStudent: (student) => dispatch(destroyStudent(student, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Students);
