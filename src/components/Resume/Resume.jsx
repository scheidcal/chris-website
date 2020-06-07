// import React from "../../../node_modules/react";
import React, { Component } from "react";
import "./Resume.css";

// Data.js holds the film and com/MusicVideos data
import { cMVData, filmData } from "./Data.js";

/*
Sections in this file

CONTACT                         con
PROFESSIONAL AFFILIATIONS       pA
EXPERTISE                       ex
COMMERCIALS & MUSIC VIDEOS      cMV   (Data.js holds some content for this section)
FEATURE FILMS                   film  (Data.js holds some content for this section)
EDUCATION                       ed

*/

const commonLeftAndBottomMargin = "mb-1 ml-2";

const contentColor = "#f0f0f0";

const commonIndent = "ml-2";

class Resume extends Component {
  state = {};

  headerContent = (
    <header className={commonLeftAndBottomMargin}>
      <h2>Chris Scheid</h2>
      <p>Set Design & Art Direction</p>
      <hr />
    </header>
  );
  conContent = (
    <section className={commonLeftAndBottomMargin}>
      <h5>CONTACT</h5>
      <p className={commonIndent}>cscheid.design@gmail.com</p>
      <p className={commonIndent}>
        Art Directors Guild Profile:
        <a
          href="https://adg.org/directory/5765-christopher-scheid/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2"
        >
          adg.org
        </a>
      </p>
    </section>
  );

  pAContent = (
    <section className={commonLeftAndBottomMargin}>
      <h5>PROFESSIONAL AFFILIATIONS</h5>
      <p className={commonIndent}>
        MEMBER, Art Director, Art Directors Guild, IATSE Local 800
      </p>
    </section>
  );
  exContent = (
    <section className={commonLeftAndBottomMargin}>
      <h5>EXPERTISE</h5>
      <div>
        <li className={commonIndent}>
          3D design and 2D drafting in Vectorworks 2019
        </li>
        <li className={commonIndent}>
          Seven Years of Experience in Commercials & Feature Films as Art
          Director, Leadman, Prop Master, and Construction Coordinator
        </li>
        <li className={commonIndent}>Coordinating & Staffing</li>
        <li className={commonIndent}>Client Approval Workflows</li>
        <li className={commonIndent}>Budgeting and Scheduling</li>
      </div>
    </section>
  );

  edContent = (
    <section className={commonLeftAndBottomMargin}>
      <h5>Education</h5>
      <div className={commonIndent}>
        University of California, Berkeley
        <div>B.A. Film Studies, College of Letters and Science</div>
      </div>
      <div className={commonIndent}>
        University of Bologna
        <div> Italy Certificate of Completion, UC Education Abroad Program</div>
      </div>
    </section>
  );

  footerContent = (
    <footer className={commonLeftAndBottomMargin}>
      <p className="small">Print Portfolio Available on Request</p>
    </footer>
  );

  constructColumnContentElement(data) {
    const columnCount = 2;
    let rowList = [];
    let rowObj = {};
    let partialRow = false;
    let row;
    let rowCount = 0;

    // Data Item Element is the variable that will hold the html for the Film/MusicVideos items
    // Each item is made inside this 'for' loop then placed in a list
    // The list is returned where the function is called in render()
    for (let i = 0; i < data.length; i++) {
      if (i % columnCount === 0) {
        row = [];
        partialRow = true;
      }

      let dataItemElement;

      // A. Construct the element for Com/MusicVideos
      if (data[i].hasOwnProperty("link")) {
        dataItemElement = (
          <div
            key={data[i].key}
            className="mb-4 col-sm-12 col-md-6 col-lg-6 col-xl-6 "
          >
            <div className="font-weight-bold">{data[i].title}</div>
            <div className="">
              Position:
              <span className="ml-5">{data[i].position}</span>
            </div>
            <div className="">
              Production:
              <span className="ml-4">{data[i].production}</span>
            </div>
            <div className="">
              Director:
              <span className="ml-5">{data[i].director}</span>
            </div>
            <div>
              Link:
              <a
                className="cMVLink"
                href={data[i].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data[i].link.substring(12, 35)}
              </a>
            </div>
          </div>
        );

        // B. Construct the element for that has the production company link
        if (data[i].hasOwnProperty("productionLink")) {
          dataItemElement = (
            <div
              key={data[i].key}
              className="mb-4 col-sm-12 col-md-6 col-lg-6 col-xl-6 "
            >
              <div className="font-weight-bold">{data[i].title}</div>
              <div className="">
                Position:
                <span className="ml-5">{data[i].position}</span>
              </div>
              <div className="">
                Production:
                <a
                  className="ml-4"
                  href={data[i].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data[i].production}
                </a>
              </div>
              <div className="">
                Director:
                <span className="ml-5">{data[i].director}</span>
              </div>
              <div>
                Link:
                <a
                  className="cMVLink"
                  href={data[i].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data[i].link.substring(12, 35)}
                </a>
              </div>
            </div>
          );
        }
      } else {
        // C. Construct the element for the film section
        dataItemElement = (
          <div
            key={data[i].key}
            className="mb-4 col-sm-12 col-md-6 col-lg-6 col-xl-6 "
          >
            <div className="font-weight-bold">{data[i].title}</div>
            <div className="">
              Position:
              <span className="ml-5">{data[i].position}</span>
            </div>
            <div className="">
              Production:
              <span className="ml-4">{data[i].production}</span>
            </div>
            <div className="">
              Director:
              <span className="ml-5">{data[i].director}</span>
            </div>
          </div>
        );
      }

      row.push(dataItemElement);

      if (i > 0 && (i - 1) % columnCount === 0) {
        rowList.push(row);
        rowObj[rowCount] = row;
        rowCount += 1;
        partialRow = false;
      }
    }

    if (partialRow) {
      rowList.push(row);
      rowObj[rowCount] = row;
      rowCount += 1;
    }

    for (let i = 0; i < rowList.length; i++) {
      rowList[i] = (
        <div className="row" key={i}>
          {rowList[i]}
        </div>
      );
    }

    return rowList;
  }

  render() {
    let cMVColumn = this.constructColumnContentElement(cMVData);
    let filmColumn = this.constructColumnContentElement(filmData);

    // This is where the output is created
    // Above are the where the sections are created
    // This is where those sections are combined to create the resume page
    // To make changes you should edit the relivent section above
    return (
      <div className="text-left body-content">
        <div className="ml-5 mr-5" style={{ background: contentColor }}>
          <div className="pb-4">{this.headerContent}</div>

          <a
            href="https://res.cloudinary.com/waterscheiddesign/image/upload/v1569182935/RESUME%20ASSETS/C%20Scheid%20Resume%202019"
            download=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={commonIndent + " btn-primary mb-4"}>PDF</button>
          </a>

          <div className="pb-4">{this.conContent}</div>

          <div className="pb-4">{this.pAContent}</div>

          <div className="pb-4">{this.exContent}</div>

          <section className={commonLeftAndBottomMargin}>
            <h5>COMMERCIALS & MUSIC VIDEOS</h5>
            <div className="container">{cMVColumn}</div>
          </section>

          <section className={commonLeftAndBottomMargin}>
            <h5>FEATURE FILMS</h5>
            <div className="container">{filmColumn}</div>
            <div className="mb-4 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
              <a
                id="imdbLink"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.imdb.com/name/nm2471814/"
              >
                imdb profile
              </a>
            </div>
          </section>

          <div className={commonLeftAndBottomMargin}>{this.edContent}</div>

          <div className="ml-2 mt-4 pb-2 ">{this.footerContent}</div>
        </div>
      </div>
    );
  }
}

export default Resume;
