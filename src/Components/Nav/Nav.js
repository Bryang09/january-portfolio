import React, { Component } from "react";

import { Link } from "react-router-dom";

import Burger from "./Burger/Burger";

import "./Nav.scss";
// #0082b3
class Nav extends Component {
  state = {
    content: [
      { id: 0, name: "about", link: "/about" },
      { id: 1, name: "projects", link: "/projects" },
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
            style={this.props.location === "/" ? { color: "#00b9ff" } : null}
          >
            {res.name}
          </Link>
        </h4>
      );
    });
    console.log(this.props);
    return (
      <div className="Nav">
        <Burger
          burger={this.state.burger}
          click={this.onBurgerClick}
          location={this.props.location}
        />
        <div className="logo">
          <h3 id="logo">
            <Link to="/">{"<bg />"}</Link>
          </h3>
        </div>
        <div className="navContent">{content}</div>
      </div>
    );
  }
}

export default Nav;
