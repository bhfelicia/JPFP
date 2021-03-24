import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Campuses = ({ campuses }) => {
  return (
    <div className="widgets">
      {campuses.map((campus) => (
        <Link to={`/campuses/${campus.id}`} key={`${campus.id}`}>
          <img src={campus.imageUrl}></img>
          <h2>{campus.name}</h2>
          <h3>{campus.students.length} students</h3>
        </Link>
      ))}
    </div>
  );
};

const mapStateToProps = ({ campuses }) => ({
  campuses,
});

export default connect(mapStateToProps)(Campuses);
