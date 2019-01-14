import React, { Component } from "react";

import "./Landing.scss";

class Landing extends Component {
  state = {
    icons: [
      {
        id: 0,
        path: "https://github.com/Bryang09",
        img: "https://img.icons8.com/ios/100/ffffff/github-filled.png"
      },
      {
        id: 1,
        path: "https://www.linkedin.com/in/bryan-gonzalez09/",
        img: "https://img.icons8.com/material/100/ffffff/linkedin.png"
      },
      {
        id: 2,
        path: "mailto:bryan.gonzalez1020.bg@gmail.com",
        img: "https://img.icons8.com/metro/100/ffffff/filled-message.png"
      }
    ]
  };
  render() {
    const icons = this.state.icons.map(res => {
      return (
        <div className="icon" key={res.id}>
          <a
            href={res.path}
            target={res.id !== 2 ? "_blank" : null}
            rel="noopener noreferrer"
          >
            <img src={res.img} alt="icon" />
          </a>
        </div>
      );
    });
    console.log(icons);
    return (
      <div className="Landing">
        <h1>Bryan Gonzalez</h1>
        <h3>Front End Developer</h3>
        <div className="icons">{icons}</div>
      </div>
    );
  }
}

export default Landing;
