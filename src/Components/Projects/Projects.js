import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Projects.scss";

import Nav from "../Nav/Nav";
import Hero from "./Hero/Hero";
import Filter from "./Filter/Filter";

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
    ],
    top: true,
    recent: false,
    react: false,
    vanilla: false,
    angular: false,
    axios: false
  };

  onTop = () => {
    // prettier-ignore
    this.setState({ top: true,  recent: false, react: false, vanilla: false, angular: false, axios: false
    });
  };

  onRecent = () => {
    // prettier-ignore
    this.setState({ top: false,  recent: true, react: false, vanilla: false, angular: false, axios: false, 
     });
  };

  render() {
    const top = projects.filter(res => res.top);
    const recent = projects.filter(res => res.recent);
    const react = projects.filter(res => res.react);
    const vanilla = projects.filter(res => res.vanilla);
    const angular = projects.filter(res => res.angular);
    const axios = projects.filter(res => res.axios);

    console.log(this.state);
    return (
      <div className="Projects">
        <Nav location={this.props.location.pathname} />
        <Hero options={this.state.options} onTop={this.onTop} />
        <div className="projectsContainer">
          {/* {top} */}
          {this.state.top ? (
            <Filter projects={top} />
          ) : this.state.recent ? (
            <Filter projects={recent} />
          ) : this.state.react ? (
            <Filter projects={react} />
          ) : this.state.vanilla ? (
            <Filter projects={vanilla} />
          ) : this.state.angular ? (
            <Filter projects={angular} />
          ) : this.state.axios ? (
            <Filter projects={axios} />
          ) : null}
          {/* <Top /> */}
        </div>
      </div>
    );
  }
}

export default Projects;
