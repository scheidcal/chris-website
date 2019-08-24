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
      <img
        className="mt-2 mb-2 img-fluid"
        src={props.src}
        alt="Alt text here"
        width="1000"
        height="600"
      />
    </div>
  );
}

export default Image;
