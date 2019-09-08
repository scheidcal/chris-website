// import React from "../../../node_modules/react";
import React, { Component } from "react";
import "./ArtDirection.css";
import ImageContainer from "../ImageContainer/ImageContainer";

import srcInterface from "../../Interfaces/images/if_images";

class ArtDirection extends Component {
  state = {};
  render() {
    return (
      <ImageContainer
        imageCount={4}
        imageSrcMap={new srcInterface().srcMapArt}
      />
    );
  }
}

export default ArtDirection;
