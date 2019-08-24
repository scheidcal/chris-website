import React from "../../../node_modules/react";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-light bg-light">
        <a className="navbar-brand" href="">
          Set Design
        </a>
        <a className="navbar-brand" href="">
          Art Direction
        </a>
        <a className="navbar-brand" href="">
          Resume
        </a>
        <div>
          <h1>Chris Scheid </h1>
          <h2>Set Design & Art Direction Set Design</h2>
          <h3>WaterScheid.la@gmail.com</h3>
          <h3>(818) 963-0675</h3>
        </div>
        <span class="navbar-text">Navbar text with an inline element</span>
      </nav>
    </div>
  );
}

export default NavBar;
