import React, { Component } from "react";

import { projects } from "../../Projects/myProjects";
import Nav from "../../Nav/Nav";

import "./Project.scss";

class Project extends Component {
  render() {
    const tech = this.props.match.params.tech;
    const id = this.props.match.params.id;

    const project = projects
      .filter(res => res.id == id)
      .map(res => {
        return (
          <div
            className="Project"
            style={{ backgroundImage: `url(${res.img})` }}
            key={res.id}
          >
            <Nav location={tech} />
            <div className="text">
              <h1>{res.name}</h1>
              <h3>{res.desc}</h3>

              <div className="buttons">
                <a href={res.demo} target="_blank" rel="noopener noreferrer">
                  <h4
                    className={
                      tech === "react"
                        ? "react"
                        : tech === "angular"
                        ? "angular"
                        : tech === "vanilla"
                        ? "vanilla"
                        : null
                    }
                  >
                    Demo
                  </h4>
                </a>
                <a href={res.code} target="_blank" rel="noopener noreferrer">
                  <h4
                    className={
                      tech === "react"
                        ? "reactCode"
                        : tech === "angular"
                        ? "angularCode"
                        : tech === "vanilla"
                        ? "vanillaCode"
                        : null
                    }
                  >
                    Code
                  </h4>
                </a>
              </div>
            </div>
          </div>
        );
      });

    return project;
  }
}

export default Project;
