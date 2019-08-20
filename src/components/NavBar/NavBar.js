import React from "../../../node_modules/react";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Fixed top
        </a>
      </nav>
    </div>
  );
}

export default NavBar;
