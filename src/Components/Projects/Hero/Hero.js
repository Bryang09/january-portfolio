import React from "react";

import './Hero.scss';

const Hero = props => {
  const options = props.options.map(res => {
    return (
      <div className="option" key={res.id}>
        <h3
          onClick={
            res.id === 0
              ? props.onTop
              : res.id === 1
              ? props.onRecent
              : res.id === 2
              ? props.onReact
              : res.id === 3
              ? props.onVanilla
              : res.id === 4
              ? props.onAngular
              : res.id === 5
              ? props.onAxios
              : null
          }
        >
          {res.name}
        </h3>
      </div>
    );
  });
  return (
    <div className="projectBg">
      <h1>Projects</h1>
      <div className="options">{options}</div>
    </div>
  );
};

export default Hero;
