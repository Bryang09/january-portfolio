import React from "react";

import "./Hero.scss";

const Hero = props => {
  return (
    <div className={props.hero ? `aboutHero` : `aboutHero altBg`}>
      <div className="text">
        <h1>Who Am I?</h1>
        <h5 onClick={props.onHero}>Find Out!</h5>
      </div>
      <div className="illustration" />
    </div>
  );
};

export default Hero;
