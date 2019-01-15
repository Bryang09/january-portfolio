import React from "react";

import { Link } from "react-router-dom";

const Filter = props => {
  const _projects = props.projects.map(res => {
    return (
      <div
        className="project"
        style={{
          backgroundImage: `url(${res.img})`
        }}
        key={res.id}
      >
        <Link to={{ pathname: `/projects/${res.id}` }}>
          <div className="link" />
        </Link>
      </div>
    );
  });
  console.log(props.projects);
  return _projects;
};

export default Filter;
