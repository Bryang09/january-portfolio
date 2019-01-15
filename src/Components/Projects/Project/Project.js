import React, { Component } from "react";

import { projects } from "../../Projects/myProjects";

class Project extends Component {
  render() {
    const tech = this.props.match.params.tech;
    const id = this.props.match.params.id;

    console.log(this.props);
    console.log(tech, id);
    console.log(projects);

    const project = projects
      .filter(res => res.id == id)
      .map(res => console.log(res));

    return (
      <div className="Project">
        <h1>Project</h1>
        {project}
      </div>
    );
  }
}

export default Project;
