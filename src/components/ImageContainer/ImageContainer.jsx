// import React from "../../../node_modules/react";
import React, { Component } from "react";
import "./ImageContainer.css";
import Image from "../Image/Image";

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
    let images = [];
    for (let i = 0; i < props.imageCount; i++) {
      let temp = {};
      temp.url = "Temp_" + i + "_url";
      temp.tag = "Temp_" + i + "_tag";
      temp.id = "Temp_" + i + "_id";
      temp.size = "Temp_" + i + "_size";
      images.push(temp);
    }

    this.state.images = images;
  }

  render() {
    let imageArray = [];

    for (let i = 0; i < this.state.images.length; i++) {
      imageArray.push(<Image key={i} id={i} />);
      console.log("i ", i);
    }

    console.log("imageArray", imageArray);

    return (
      <div>
        <h4> ImageContainer Placeholder</h4>
        {imageArray}
      </div>
    );
  }
}

export default ImageContainer;
