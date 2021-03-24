import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const SingleCampus = ({ campus }) => {
  if (!campus) {
    return null;
  }
  return (
    <div className="single-campus">
      <h1>{campus.name}</h1>
      <img src={campus.imageUrl}></img>
      <h2>{campus.address}</h2>
      <p>{campus.description}</p>
      <ol>
        {campus.students.map((student) => (
          <Link to={`/students/${student.id}`} key={student.id}>
            <li>{student.fullName}</li>
          </Link>
        ))}
      </ol>
    </div>
  );
};

const mapStateToProps = ({ campuses }, otherProps) => {
  const campus = campuses.find(
    (campus) => campus.id === Number(otherProps.match.params.id)
  );
  return { campus };
};

export default connect(mapStateToProps)(SingleCampus);
