// import React from "../../../node_modules/react";
import React, { Component } from "react";
import "./Resume.css";

const headerContentClasses = "mb-2 ml-2";
const expertiseContentClasses = "mb-3 ml-2";
const workContentClasses = "mb-3";
const educationContentClasses = "mb-3 ml-4";

// const headerColor = { background: "#527ca6" };
// const expertiseColor = { background: "#a65252" };
// const workColor = { background: "#52a67c" };
// const educationColor = { background: "#527ca6" };

const content = "#f0f0f0";

const headerColor = { background: content };
const expertiseColor = { background: content };
const workColor = { background: content };
const educationColor = { background: content };

//0077ea
// const bg = { background: "#234f5d" };

class Resume extends Component {
  state = {};

  header = (
    <header className="mb-4">
      <h1 className="mb-3 ml-2">Chris Scheid</h1>
      <div>
        <li className={headerContentClasses}>ADG Local 800</li>

        <li className={headerContentClasses}>Art Director</li>

        <li className={headerContentClasses}>Assistant Art Director</li>

        <li className={headerContentClasses}>Set Designer</li>

        <li className={headerContentClasses}>cscheid.design@gmail.com</li>

        <li className={headerContentClasses}>(818) 963-0675</li>

        <li className={headerContentClasses}>ADG member profile page:</li>

        <li className={headerContentClasses}>IMDB: www.addLinkHere.com</li>
      </div>
    </header>
  );

  expertise = (
    <section className="mb-4">
      <h1 className="mb-3 ml-2">Expertise</h1>
      <div>
        <li className={expertiseContentClasses}>
          3D design and 2D drafting in Vectorworks 2019
        </li>
        <li className={expertiseContentClasses}>
          Seven Years of Experience in Commercials & Feature Films as Art
          Director, Leadman, Prop Master, and Construction Coordinator
        </li>
        <li className={expertiseContentClasses}>
          Coordinating & Staffing the following departments: Art Department, Set
          Decoration, Set Construction, Props
        </li>
        <li className={expertiseContentClasses}>Client Approval Workflows</li>
        <li className={expertiseContentClasses}>Budgeting and Scheduling</li>
      </div>
    </section>
  );

  education = (
    <section className="">
      <h1 className=" ml-2">Education</h1>

      <div className={educationContentClasses}>
        University of California, Berkeley
        <div>B.A. Film Studies, College of Letters and Science</div>
      </div>

      <div className={educationContentClasses}>
        University of Bologna
        <div> Italy Certificate of Completion, UC Education Abroad Program</div>
      </div>
    </section>
  );
  workContent = [
    {
      title: "Dueces",
      production: "Flavor Unit Entertainment",
      director: "Jamal Hill",
      position: "Art Director",
      row: "0",
      column: "0"
    },
    {
      title: "Juveniles",
      production: "Disruptive LA",
      director: "Nico Sabenorio",
      position: "Art Director",
      row: "0",
      column: "1"
    },
    {
      title: "The Curse of Sleeping Beauty",
      production: "Briar Rose Productions",
      director: "Pearry Teo",
      position: "Art Director",
      row: "0",
      column: "2"
    },
    {
      title: "My Scientology Movie",
      production: "BBC Films",
      director: "John Dower",
      position: "Construction Coordinator",
      row: "1",
      column: "0"
    },
    {
      title: "Sun Dogs ",
      production: "Caviar",
      director: "Jennifer Morrison",
      position: "Leadman",
      row: "1",
      column: "1"
    },
    {
      title: "Dreamland",
      production: "Beachwood Park Films",
      director: "Robert Schwartzman",
      position: "Leadman",
      row: "1",
      column: "2"
    },
    {
      title: "The Nightstalker ",
      production: "MRB Productions",
      director: "Megan Griffiths",
      position: "Leadman",
      row: "2",
      column: "0"
    },
    {
      title: "Imperial Dreams ",
      production: "Sundance Film Foundation",
      director: "Malik Vitthal",
      position: "Leadman / Set Decorator",
      row: "2",
      column: "1"
    },
    {
      title: "8989 Redstone",
      production: "New Wave Entertainment",
      director: "Jay Chapman",
      position: "Prop Master",
      row: "2",
      column: "2"
    },
    {
      title: "Moments of Clarity",
      production: "Phillm Production",
      director: "Stev Elam",
      position: "Set Decorator",
      row: "3",
      column: "0"
    },
    {
      title: "Raven’s Touch",
      production: "Soul Kiss Films",
      director: "Amy Esacove",
      position: "Prop Master",
      row: "3",
      column: "1"
    },
    {
      title: "Detained in the Desert",
      production: "Real Women Have Curves Studio",
      director: "Iliana Sosa",
      position: "Prop Master",
      row: "3",
      column: "2"
    },
    {
      title: "Disney Channel Promo: Ecosmith Rocks My House",
      production: "Fictious LLC",
      director: "Randy Bobbit",
      position: "Art Director",
      row: "4",
      column: "0"
    },
    {
      title: "Disney Channel / Ring-Pop: “Rock that Rock” by R5",
      production: "Disruptive LA",
      director: "Michel Borden",
      position: "Art Director",
      row: "4",
      column: "1"
    },
    {
      title: "Pepsi spot (web) - Black Knight Decoded",
      production: "Triage Entertainment",
      director: "Jabar Raisani",
      position: "Art Director & Set Decorator",
      row: "4",
      column: "2"
    },
    {
      title: "Tommy John Spot #6386",
      production: "Smuggler",
      director: "Guy Shelmerdine",
      position: "Assistant Art Director",
      row: "5",
      column: "0"
    }
  ];

  render() {
    const columnCount = 2;
    let rowList = [];
    let rowObj = {};
    let partialRow = false;
    let row;
    let rowCount = 0;
    for (let i = 0; i < this.workContent.length; i++) {
      console.log("index, i ", i);
      if (i === 0) {
        row = [];
        partialRow = true;
        console.log("row created");
      }

      //text-sm-center text-md-center text-lg-left
      let workContentElement = (
        <div className="mb-4 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
          <h5 className="font-weight-bold">{this.workContent[i].title}</h5>
          <div className="">
            Position:
            <span className="ml-5">{this.workContent[i].position}</span>
          </div>
          <div className="">
            Production:
            <span className="ml-4">{this.workContent[i].production}</span>
          </div>
          <div className="">
            Director:
            <span className="ml-5">{this.workContent[i].director}</span>
          </div>
        </div>
      );

      row.push(workContentElement);

      if (i > 0 && i % columnCount === 0) {
        rowList.push(row);
        console.log(rowCount);
        rowObj[rowCount] = row;
        rowCount += 1;
        partialRow = false;
        console.log("row", row);
        console.log("row closed");
      }
    }

    if (partialRow) {
      rowList.push(row);
      rowObj[rowCount] = row;
      rowCount += 1;
      console.log("row", row);
      console.log("row closed - partial row");
    }

    console.log("before  rowlist", rowList);

    for (let i = 0; i < rowList.length; i++) {
      console.log("i ", i);
      rowList[i] = (
        <div className="row" key={i}>
          {rowList[i]}
        </div>
      );
    }

    console.log("After    rowlist", rowList);

    console.log("Test");

    Object.keys(rowObj).forEach(key => {
      console.log("key", key);
      rowObj[key] = <div className="row">{rowObj[key]}</div>;
    });

    console.log("rowlist", rowList);
    console.log("rowlist.length", rowList.length);
    console.log("rowObj", rowObj);

    //   let row = (
    //   <div className="mb-4">
    //   <h5 className="font-weight-bold">{props.content.title}</h5>
    //   <div className="">
    //     Position:<span className="ml-5">{props.content.position}</span>
    //   </div>
    //   <div className="">
    //     Production:<span className="ml-4">{props.content.production}</span>
    //   </div>
    //   <div className="">
    //     Director:<span className="ml-5">{props.content.director}</span>
    //   </div>
    // </div>);

    /*
/* {this.workContent.map(workObj => {
                return <Work content={workObj}></Work>;
              })} */

    return (
      <div class="text-left body-content">
        <div className="ml-5 mr-5">
          <div className="pb-4" style={headerColor}>
            {this.header}
          </div>
          <div className="pb-4" style={expertiseColor}>
            {this.expertise}
          </div>
          <div className="pb-4" style={workColor}>
            <h2>Feature Films, Commercials & Music Videos</h2>
            <div class="container">{rowList[0]}</div>
            {/* <div class="container">{rowList}</div> */}
            {/* <div class="fluid-container">{rowObj}</div> */}
          </div>
          <div className="pb-4" style={educationColor}>
            {this.education}
          </div>
          <p className="small" style={educationColor}>
            Print Portfolio Available on Request
          </p>
        </div>
      </div>
    );
  }
}

export default Resume;
