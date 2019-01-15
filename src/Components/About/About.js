import React, { Component } from "react";
import Hero from "./Hero/Hero";

import Nav from "../Nav/Nav";

import "./About.scss";
class About extends Component {
  state = {
    heroOnly: true,
    icons: [
      { id: 0, class: "fab fa-html5", color: "#e54c21" },
      { id: 1, class: "fab fa-css3-alt", color: "#29a9df" },
      { id: 2, class: "fab fa-js", color: "#f2bf26" },
      { id: 3, class: "fab fa-react", color: "#61dbfb" },
      { id: 4, class: "fab fa-angular", color: "#d6002f" }
    ]
  };

  onHeroButton = () => {
    this.setState({ heroOnly: !this.state.heroOnly });
  };
  render() {
    console.log(this.state.heroOnly);
    console.log(this.refs.aboutMe);

    const icons = this.state.icons.map(res => {
      return (
        <div className="icon" key={res.id}>
          <i className={`${res.class} `} style={{ color: res.color }} />
        </div>
      );
    });

    return (
      <div className="About">
        <Nav location={this.props.location.pathname} />
        <Hero hero={this.state.heroOnly} onHero={this.onHeroButton} />

        <section
          className="aboutMe"
          style={
            !this.state.heroOnly ? { display: "flex" } : { display: "none" }
          }
        >
          <div className="intPara">
            <h2>So, Who am I And why should you read this?</h2>
            <h4>
              My name is Bryan Gonzalez and I'm a Front End Developer. I am 100%
              self taught, which contrary to popular belief, is an advantage.
              How dare I say such a thing? Well, I've had to learn the hard way
              that knowing how to find an answer is just as crusial as knowing
              the answer. For over a year now, I've had the pleasure of
              seemingly endless adventures to finding an answer, that frankly,
              aren't all that complicated. However, I believe this is what
              allowed me to grow not only as a developer, but as a person as
              well.
            </h4>
            <h2 />
            <h2>That didn't answer who I am?</h2>
            <h4>
              If you've read this far, you probably have a pretty good idea
              about the type of person I am. But is it accurate? Yes. I'm a
              pretty laid back guy with a work oriented mentality. This, I've
              been told, makes me an efficient worker. I also enjoy watching
              sports and catching a good comedy. So, if you're looking for a
              hardworking and laid back worker, look no further.
            </h4>

            <div className="icons">{icons}</div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
