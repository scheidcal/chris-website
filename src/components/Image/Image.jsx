import React from "react";
import "./Image.css";

function Image(props) {
  console.log("id", props.id);
  console.log("props", props);
  // let img = (
  //   <img
  //     // src={"../../assets/main-images/" + (props.id + 1 + "/800.jpg")}
  //     src={"src/assets/main-images/" + (props.id + 1 + "/800.jpg")}
  //     alt="Alt text here"
  //     width="42"
  //     height="42"
  //   />
  // );

  // console.log("Image tag", img);

  return (
    <div>
      <img src={props.src} alt="Alt text here" width="400" height="400" />
      <p> Image Placeholder {props.id} </p>
    </div>
  );
}

export default Image;
