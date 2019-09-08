import React, { useState, useEffect } from "react";
import "./Image.css";

/*
 Lazyload code is under MIT Licence
 https://www.npmjs.com/package/react-lazy-load
 https://github.com/loktar00/react-lazy-load

Author: Jason loktar00 https://github.com/loktar00

The MIT License (MIT)

Copyright (c) 2015 Jason

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
import LazyLoad from "react-lazy-load";

function Image(props) {
  console.log("id", props.id);
  console.log("props", props);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

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

  /*
  return (
    <div>
      <img
        className="mt-2 mb-2 img-fluid"
        src={props.src}
        alt="Alt text here"
        width="1300"
        height="600"
      />
    </div>
  );
  */

  //  <img
  //  className="mt-2 mb-2 img-fluid"
  //  src={props.src}
  //  alt="Alt text here"
  //  width="1300"
  //  height="600"
  // />

  /*
  <img
        className="mt-2 mb-2 img-fluid"
        src={props.src}
        alt="Alt text here"
        width="1300"
        height="600"
      />
  */

  //className="img-container mt-2 mb-2 img-fluid"
  //className="mt-2 mb-5 img-responsive "

  return (
    <div className="row min-vw-50">
      <div className="filler"></div>
      <div className="col mt-2 mb-5">
        <LazyLoad
          offsetVertical={1800}
          onContentVisible={() => console.log("Lazyloaded id", props.id)}
          throttle={1}
        >
          <img
            className="img-fluid"
            src={props.src}
            alt="Alt text here"
            width="1300"
            height="600"
          />
        </LazyLoad>
      </div>
    </div>
  );
}

export default Image;
