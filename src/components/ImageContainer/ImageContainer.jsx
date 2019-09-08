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
    console.log("Constructor Start");
    console.log("props", props);
    this.state.imageCount = props.imageCount;
    console.log("this.state.imageCount", this.state.imageCount);

    //props.imageSrcInterface;
    //console.log("props.imageSrcInterface", props.imageSrcInterface.idToSrcMap);

    let images = [];
    for (let i = 0; i < props.imageCount; i++) {
      let temp = {};
      console.log("i", i);
      // console.log(
      //   "props.imageSrcInterface.idToSrcMap[i]",
      //   props.imageSrcInterface.idToSrcMap[i]
      // );
      temp.src = props.imageSrcMap[i];

      images.push(temp);
    }
    this.state.images = images;
    console.log("this.state.images", this.state.images);
  }

  render() {
    let imageArray = [];
    console.log("this.state.images render", this.state.images);
    for (let i = 0; i < this.state.images.length; i++) {
      imageArray.push(<Image key={i} id={i} src={this.state.images[i].src} />);
      console.log("i ", i);
      //console.log("getImageSource(i) ", getImageSource(i));
    }

    console.log("imageArray", imageArray);

    return (
      <div className="text-center body-content container">{imageArray}</div>
    );
  }
}

export default ImageContainer;
