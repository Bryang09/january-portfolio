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
        <Link
          to={
            res.react === true
              ? { pathname: `/projects/react/${res.id}` }
              : res.angular === true
              ? { pathname: `/projects/angular/${res.id}` }
              : res.vanilla === true
              ? { pathname: `/projects/vanilla/${res.id}` }
              : null
          }
        >
          <div className="link" />
        </Link>
      </div>
    );
  });
  return _projects;
};

export default Filter;
