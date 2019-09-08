import React from "../../../node_modules/react";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="navbar-brand" href="/SetDesign">
              Set Design
            </a>
            <a className="navbar-brand" href="/ArtDirection">
              Art Direction
            </a>
            <a className="navbar-brand" href="/Resume">
              Resume
            </a>
          </div>
        </div>
        {/* <div>
          <h1>Chris Scheid </h1>
          <h3>WaterScheid.la@gmail.com</h3>
          <h3>(818) 963-0675</h3>
        </div> */}
        {/* <span class="navbar-text navbar-light bg-light"> */}
        <span className="navbar-text navbar-light bg-light">
          <h2>Chris Scheid</h2> <div>Set Design & Art Direction</div>
          <div>cscheid.design@gmail.com</div>
          <div> (818) 963-0675</div>
        </span>
      </nav>
    </div>
  );
}

export default NavBar;
