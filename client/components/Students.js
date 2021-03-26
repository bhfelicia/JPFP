import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AddStudent from "./AddStudent";

const Students = ({ students }) => {
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
          </Link>
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ students }) => ({
  students,
});

export default connect(mapStateToProps)(Students);
