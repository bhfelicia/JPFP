import React from "react";

import { Link, Switch, Route } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
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
      <hr />
      <div id="welcome">
        <h1>Welcome to Campus Life!</h1>
      </div>
    </div>
  );
};

export default Navbar;
