import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Campuses = ({ campuses }) => {
  return (
    <div id="campuses">
      <ul>
        {campuses.map((campus) => (
          <li key={`${campus.id}`}>{campus.name}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ campuses }) => ({
  campuses,
});

export default connect(mapStateToProps)(Campuses);
