import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

// import ImageContainer from "../ImageContainer/ImageContainer";
import NavBar from "../NavBar/NavBar";
// import Resume from "../Resume/Resume";
// import ArtDirection from "../ArtDirection/ArtDirection";
import SetDesign from "../SetDesign/SetDesign";

const artDirection = lazy(() => import("../ArtDirection/ArtDirection"));
const resume = lazy(() => import("../Resume/Resume"));

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <NavBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={SetDesign} />
          <Route path="/SetDesign" component={SetDesign} />
          <Route path="/ArtDirection" component={artDirection} />
          <Route path="/Resume" component={resume} />
        </Suspense>
      </Router>
    );
  }
}

export default App;
