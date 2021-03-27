import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { setCampus } from "../store/thunks";

class AddCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imageUrl: "",
      address: "",
      description: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    const change = {};
    change[evt.target.name] = evt.target.value;
    this.setState(change);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createCampus({ ...this.state });
  }
  render() {
    const { name, imageUrl, address, description } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <div id="create-campus" className="form">
        <h3>Add a new campus!</h3>
        <form id="create-campus" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input name="name" value={name} onChange={handleChange} />
          <label htmlFor="imageUrl">Image</label>
          <input name="imageUrl" value={imageUrl} onChange={handleChange} />
          <label htmlFor="address">Address</label>
          <input name="address" value={address} onChange={handleChange} />
          <label htmlFor="description">Description</label>
          <input
            name="description"
            value={description}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
          <Link to="/">Cancel</Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  createCampus: (campus) => dispatch(setCampus(campus, history)),
});

export default withRouter(connect(null, mapDispatchToProps)(AddCampus));
