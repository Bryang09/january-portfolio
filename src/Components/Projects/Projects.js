import React, { Component } from "react";

import "./Projects.scss";

import Nav from "../Nav/Nav";
import Hero from "./Hero/Hero";

import { projects } from "./myProjects";

class Projects extends Component {
  state = {
    options: [
      { id: 0, name: "Top" },
      { id: 1, name: "Recent" },
      { id: 2, name: "React" },
      { id: 3, name: "Vanilla Js" },
      { id: 4, name: "Angular" },
      { id: 5, name: "Axios" }
    ]
  };
  render() {
    const top = projects
      .filter(res => res.top)
      .map(res => {
        return (
          <div
            className="project"
            style={{ backgroundImage: `url(${res.img})` }}
            key={res.id}
          />
        );
      });
    return (
      <div className="Projects">
        <Nav location={this.props.location.pathname} />
        <Hero options={this.state.options} />
        <div className="projectsContainer">{top}</div>
      </div>
    );
  }
}

export default Projects;
