import React, { Component } from "react";

import { projects } from "../../Projects/myProjects";
import Nav from "../../Nav/Nav";

import "./Project.scss";

class Project extends Component {
  render() {
    const tech = this.props.match.params.tech;
    const id = this.props.match.params.id;

    console.log(this.props);
    console.log(tech, id);
    console.log(projects);

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
                    style={
                      tech === "react"
                        ? {
                            background: `linear-gradient(rgb(57, 241, 255), rgb(57,241,255), #1D7980)`
                          }
                        : tech === "angular"
                        ? {
                            background: `linear-gradient(#E53939, #E53939, #802E2E)`
                          }
                        : tech === "vanilla"
                        ? {
                            background: `linear-gradient(#f8e01e, #f8e01e, #9c9540)`
                          }
                        : null
                    }
                  >
                    Demo
                  </h4>
                </a>
                <a href={res.code} target="_blank" rel="noopener noreferrer">
                  <h4
                    style={
                      tech === "react"
                        ? {
                            background: `linear-gradient(#00B9FF ,#00B9FF , #005D80)`
                          }
                        : tech === "angular"
                        ? {
                            background: `linear-gradient(#7f0e0e,#7f0e0e,#7f0e0e,#3d0a0a)`
                          }
                        : tech === "vanilla"
                        ? {
                            background: `linear-gradient(#e0d54c, #e0d54c, #735e0b)`
                          }
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
