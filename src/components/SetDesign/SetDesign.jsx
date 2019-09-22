// import React from "../../../node_modules/react";
import React, { Component } from "react";
import "./SetDesign.css";
import ImageContainer from "../ImageContainer/ImageContainer";
import Image from "../Image/Image";

import srcInterface from "../../Interfaces/images/if_images";

import setDesignImage1 from "../../assets/setDesignImages/setDesignImage01.jpg";
import setDesignImage2 from "../../assets/setDesignImages/setDesignImage02.jpg";

//https://res.cloudinary.com/waterscheiddesign/image/upload/v1568643390/Set%20Design%20%28main%20page%29/image01.jpg

class SetDesign extends Component {
  state = {};

  render() {
    return (
      <section className="text-center body-content container">
        <Image src={setDesignImage1}></Image>
        <Image src={setDesignImage2}></Image>
        <ImageContainer imageSrcMap={new srcInterface().srcMapSet} />
      </section>
    );
  }
}

export default SetDesign;
