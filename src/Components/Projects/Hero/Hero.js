import React from "react";

const Hero = props => {
  const options = props.options.map(res => {
    console.log(res);
    return (
      <div className="option" key={res.id}>
        <h3 onClick={res.func}>{res.name}</h3>
      </div>
    );
  });
  console.log(props.options);
  return (
    <div className="projectBg">
      <h1>Projects</h1>
      <div className="options">{options}</div>
    </div>
  );
};

export default Hero;
