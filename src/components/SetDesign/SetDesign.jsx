// import React from "../../../node_modules/react";
import React, { Component } from "react";
import "./SetDesign.css";
import ImageContainer from "../ImageContainer/ImageContainer";
import Image from "../Image/Image";

import srcInterface from "../../Interfaces/images/if_images";

// import setDesignImage1 from "../../assets/setDesignImages/image001.jpg";
import setDesignImage2 from "../../assets/setDesignImages/image01.jpeg";
import setDesignImage3 from "../../assets/setDesignImages/image02.jpeg";

class SetDesign extends Component {
  state = {};

  render() {
    return (
      <section className="text-center body-content container">
        {/* <Image key={0} id={0} src={setDesignImage1}></Image> */}
        <Image key={1} id={1} src={setDesignImage2}></Image>
        <Image key={2} id={2} src={setDesignImage3}></Image>
        <div>
          <ImageContainer imageSrcMap={new srcInterface().srcMapSet} />
        </div>
      </section>
    );
  }
}

export default SetDesign;
