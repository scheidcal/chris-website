// import React from "../../../node_modules/react";
import React, { Component } from "react";
import "./ImageContainer.css";
import Image from "../Image/Image";

// The first 2 or 3 images should be imported
// All other images should be fetched from the cdn
// Using https://www.npmjs.com/package/react-lazy-load-image-component

class ImageContainer extends Component {
  state = {
    imageCount: -1,
    images: []
  };

  constructor(props) {
    super(props);

    this.state.imageCount = props.imageSrcMap.length;

    let images = [];
    for (let i = 0; i < this.state.imageCount; i++) {
      let temp = {};
      temp.src = props.imageSrcMap[i];
      images.push(temp);
    }
    this.state.images = images;
  }

  render() {
    let imageArray = [];
    for (let i = 0; i < this.state.images.length; i++) {
      imageArray.push(
        <Image key={i + 3} id={i + 3} src={this.state.images[i].src} />
      );
    }

    return <div>{imageArray}</div>;
  }
}

export default ImageContainer;
