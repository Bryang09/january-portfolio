import React from "react";

const Section1 = props => {
  return (
    <section
      className="aboutMe"
      style={!props.heroOnly ? { display: "flex" } : { display: "none" }}
    >
      <div className="intPara">
        <h2>So, Who am I And why should you read this?</h2>
        <h4>
          My name is Bryan Gonzalez and I'm a Front End Developer. I am 100%
          self taught, which contrary to popular belief, is an advantage. How
          dare I say such a thing? Well, I've had to learn the hard way that
          knowing how to find an answer is just as crusial as knowing the
          answer. For over a year now, I've had the pleasure of seemingly
          endless adventures to finding an answer, that frankly, aren't all that
          complicated. However, I believe this is what allowed me to grow not
          only as a developer, but as a person as well.
        </h4>
        <h2 />
        <h2>That didn't answer who I am?</h2>
        <h4>
          If you've read this far, you probably have a pretty good idea about
          the type of person I am. But is it accurate? Yes. I'm a pretty laid
          back guy with a work oriented mentality. This, I've been told, makes
          me an efficient worker. I also enjoy watching sports and catching a
          good comedy. So, if you're looking for a hardworking and laid back
          worker, look no further.
        </h4>

        <div className="icons">{props.icons}</div>
      </div>
    </section>
  );
};

export default Section1;
