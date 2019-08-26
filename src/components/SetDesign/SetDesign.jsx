// import React from "../../../node_modules/react";
import React, { Component } from "react";
import "./SetDesign.css";
import ImageContainer from "../ImageContainer/ImageContainer";

import srcInterface from "../../Interfaces/images/if_images";

//<ImageContainer imageCount={4} imageSrcInterface={new srcInterface()} />

class SetDesign extends Component {
  state = {};
  //imageSrcInterface = new srcInterface();
  render() {
    // return <div>SetDesign placeholder</div>;
    return (
      <ImageContainer imageCount={4} imageSrcInterface={new srcInterface()} />
    );
  }
}

export default SetDesign;
