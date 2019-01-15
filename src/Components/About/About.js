import React, { Component } from "react";
import Hero from "./Hero/Hero";

import Nav from "../Nav/Nav";
import Section1 from "./Section1/Section1";

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
        <Section1 heroOnly={this.state.heroOnly} icons={icons} />
      </div>
    );
  }
}

export default About;
