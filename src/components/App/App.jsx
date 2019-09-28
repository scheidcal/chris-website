import React, { Component, Suspense, lazy } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

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
          <Switch>
            <Route exact path="/" component={SetDesign} />
          </Switch>
          <Switch>
            <Route exact path="/SetDesign" component={SetDesign} />
          </Switch>
          <Switch>
            <Route exact path="/ArtDirection" component={artDirection} />
          </Switch>
          <Switch>
            <Route exact path="/Resume" component={resume} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
