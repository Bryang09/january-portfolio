import React, { Component } from "react";

import Nav from "../Nav/Nav";

import "./Landing.scss";

class Landing extends Component {
  state = {
    icons: [
      {
        id: 0,
        path: "https://github.com/Bryang09",
        class: "fab fa-github"
      },
      {
        id: 1,
        path: "https://www.linkedin.com/in/bryan-gonzalez09/",
        class: "fab fa-linkedin"
      },
      {
        id: 2,
        path: "mailto:bryan.gonzalez1020.bg@gmail.com",
        class: "fas fa-envelope"
      }
    ],
    width: window.innerWidth
  };

  componentDidUpdate = () => {
    if (window.innerWidth !== this.state.width) {
      this.setState({ width: window.innerWidth });
    }
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
            <i
              className={
                window.innerWidth < 600
                  ? `${res.class} fa-2x`
                  : `${res.class} fa-4x`
              }
            />
          </a>
        </div>
      );
    });
    console.log(icons);
    console.log(this.state.width);

    return (
      <div className="Landing">
        <Nav location={this.props.location.pathname} />
        <div className="landingContent">
          <h1>Bryan Gonzalez</h1>
          <h3>Front End Developer</h3>
          <div className="icons">{icons}</div>
        </div>
      </div>
    );
  }
}

export default Landing;
