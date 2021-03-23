import React from "react";
import { connect } from "react-redux";

const Students = ({ students }) => {
  return (
    <div id="students">
      <hr />
      {students.map((student) => {
        return (
          <div key={`${student.id}`}>
            <img src={student.image}></img>
            <h2>{student.fullName}</h2>
            <h3>Studies at {student.campus.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ students }) => ({
  students,
});

// const mapDispatchToProps = (dispatch) => ({
//   students: () => dispatch(fetchStudents()),
// });

export default connect(mapStateToProps)(Students);
