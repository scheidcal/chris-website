import React from "react";
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

// import { forceCheck } from "react-lazyload";

function Image(props) {
  return (
    <div className="row min-vw-50 image-row">
      <div className="col mt-2 mb-5">
        <LazyLoad
          offset={10}
          throttle={1}
          // onContentVisible={() => console.log("loaded image" + props.id)}
          height="700px"
          // height="100%"
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
