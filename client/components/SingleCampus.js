import React from "react";
import { connect } from "react-redux";

const SingleCampus = ({ campus }) => {
  return (
    <div className="single-campus">
      <h1>{campus.name}</h1>
    </div>
  );
};

const mapStateToProps = ({ campus }) => ({
  campus,
});

export default SingleCampus;
