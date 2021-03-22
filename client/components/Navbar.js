import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <h1>
        <Link to="/campuses">Campuses</Link>
      </h1>
      <h1>
        <Link to="/students">Students</Link>
      </h1>
    </nav>
  );
};

export default Navbar;
