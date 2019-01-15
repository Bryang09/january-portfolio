import React from "react";

import "./Hero.scss";

const Hero = props => {
  console.log(props);

  return (
    <div
      className={props.hero ? `aboutHero` : `aboutHero altBg`}
      // style={
      //   props.hero
      //     ? { background: "linear-gradient(#9c8af6, #d06cce)" }
      //     : !props.hero
      //     ? { backgroundImage: "url('../new.svg')" }
      //     : null
      // }
    >
      <div className="text">
        <h1>Who Am I?</h1>
        <h5 onClick={props.onHero}>Find Out!</h5>
      </div>
      <div className="illustration" />
    </div>
  );
};

export default Hero;
