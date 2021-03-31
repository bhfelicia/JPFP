import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCampus } from "../store/thunks";

class EditCampus extends Component {
  constructor(props) {
    super(props);
    const { id, name, imageUrl, address, description } = props;
    this.state = {
      id: id ? id : "",
      name: id ? name : "",
      imageUrl: id ? imageUrl : "",
      address: id ? address : "",
      description: id ? description : "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.edit({ ...this.state });
  }

  componentDidMount() {
    this.setState(this.props.campus);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.campus && this.props.campus.id) {
      this.setState(this.props.campus);
    }
  }
  render() {
    const { name } = this.props.campus || "";
    const { handleSubmit, handleChange } = this;
    return (
      <div>
        <h1>Edit {name}'s information</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Campus name</label>
          <input name="name" value={this.state.name} onChange={handleChange} />
          <label htmlFor="imageUrl">Campus image</label>
          <input
            name="imageUrl"
            value={this.state.imageUrl}
            onChange={handleChange}
          />
          <label htmlFor="address">Campus address</label>
          <input
            name="address"
            value={this.state.address}
            onChange={handleChange}
          />
          <label htmlFor="description">Campus description</label>
          <input
            name="description"
            value={this.state.description}
            onChange={handleChange}
          />
          <button type="submit">Submit your changes</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (
  state,
  {
    match: {
      params: { id },
    },
  }
) => {
  return { campus: state.campuses.find((campus) => campus.id === Number(id)) };
};

const mapDispatchToProps = (dispatch, { history }) => ({
  edit: (campus) => dispatch(updateCampus(campus, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCampus);
