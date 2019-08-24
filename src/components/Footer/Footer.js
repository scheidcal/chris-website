import React from "../../../node_modules/react";
import "./Footer.css";

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
        {/* <div>
          <h1>Chris Scheid </h1>
          <h3>WaterScheid.la@gmail.com</h3>
          <h3>(818) 963-0675</h3>
        </div> */}
        <span class="navbar-text">
          <div>Chris Scheid</div> <div>WaterScheid.la@gmail.com</div>
          <div> (818) 963-0675</div>
        </span>
      </nav>
    </div>
  );
}

export default NavBar;
