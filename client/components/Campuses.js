import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AddCampus from "./AddCampus";

const Campuses = ({ campuses }) => {
  return (
    <div className="widgets">
      <div id="add-campus">
        <AddCampus />
      </div>
      {campuses.map((campus) => (
        <Link to={`/campuses/${campus.id}`} key={`${campus.id}`}>
          <img src={campus.imageUrl}></img>
          <h2>{campus.name}</h2>
          <h3>{campus.students ? campus.students.length : 0} students</h3>
          <button>X</button>
        </Link>
      ))}
    </div>
  );
};

const mapStateToProps = ({ campuses }) => ({
  campuses,
});

export default connect(mapStateToProps)(Campuses);
