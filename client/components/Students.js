import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Students = ({ students }) => {
  return (
    <div className="widgets">
      {students.map((student) => {
        return (
          <Link to={`/students/${student.id}`} key={`${student.id}`}>
            <img src={student.image}></img>
            <h2>{student.fullName}</h2>
            <h3>Studies at {student.campus.name}</h3>
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
