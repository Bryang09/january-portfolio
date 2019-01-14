import React, { Component } from "react";

import { Link } from "react-router-dom";

import Burger from "./Burger/Burger";

import "./Nav.scss";
// #0082b3
class Nav extends Component {
  state = {
    content: [
      { id: 0, name: "about", link: "/about" },
      { id: 1, name: "project", link: "/projects" },
      { id: 2, name: "contact", link: "/contact" },
      { id: 3, name: "resume", link: "/resume" }
    ],
    burger: false
  };

  onBurgerClick = () => {
    this.setState({ burger: !this.state.burger });
  };

  render() {
    const content = this.state.content.map(res => {
      return (
        <h4 key={res.id}>
          <Link
            to={res.link}
            // style={
            //   this.props.location === "/" && window.innerWidth < 600
            //     ? { color: "#fff" }
            //     : null
            // }
          >
            {res.name}
          </Link>
        </h4>
      );
    });
    const logo = `<bg />`;
    console.log(window.innerWidth);
    return (
      <div className="Nav" style={this.state.burger ? { left: 0 } : null}>
        <Burger burger={this.state.burger} click={this.onBurgerClick} />
        <h3 id="logo">
          <Link to="/">{logo}</Link>
        </h3>
        <div className="navContent">{content}</div>
      </div>
    );
  }
}

export default Nav;
