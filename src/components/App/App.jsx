import React, { Component } from "react";
import "./App.css";
import ImageContainer from "../ImageContainer/ImageContainer";
import NavBar from "../NavBar/NavBar";
import srcInterface from "../../Interfaces/images/if_images";

class App extends Component {
  state = {};
  imageSrcInterface = new srcInterface();

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ImageContainer imageCount={4} imageSrcInterface={new srcInterface()} />
      </React.Fragment>
    );
  }
}

export default App;
