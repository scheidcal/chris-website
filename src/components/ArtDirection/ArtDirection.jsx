// import React from "../../../node_modules/react";
import React, { Component } from "react";
import "./ArtDirection.css";
import ImageContainer from "../ImageContainer/ImageContainer";
import Image from "../Image/Image";

import srcInterface from "../../Interfaces/images/if_images";

import artDirImage1 from "../../assets/artDirImages/ADimage01.jpg";
import artDirImage2 from "../../assets/artDirImages/ADimage02.jpg";
import artDirImage3 from "../../assets/artDirImages/ADimage03.jpg";

class ArtDirection extends Component {
  state = {};
  render() {
    return (
      <section className="text-center body-content container">
        <Image src={artDirImage1}></Image>
        <Image src={artDirImage2}></Image>
        <Image src={artDirImage3}></Image>
        <ImageContainer imageSrcMap={new srcInterface().srcMapArt} />
      </section>
    );
  }
}

export default ArtDirection;
