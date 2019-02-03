import React, { Component } from "react";

import Nav from "../Nav/Nav";
import Icons from "./Icons/Icons";

import "./Contact.scss";

class Contact extends Component {
  state = {
    toggle: false
  };

  onToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <div className="Contact">
        <Nav location={this.props.location.pathname} />
        <div
          className="bg"
          style={
            this.state.toggle
              ? {
                  height: "40vh"
                }
              : {
                  height: "100vh",
                  background: `linear-gradient(#9C8AF6,#4E457B)`
                }
          }
        >
          <h1
            style={
              this.state.toggle ? { fontSize: "3em" } : { fontSize: "4em" }
            }
          >
            Lets Work Together!
          </h1>
          <h5 onClick={this.onToggle}>Contact</h5>
        </div>

        <section
          className="contactBoxesContainer"
          style={
            this.state.toggle
              ? { display: "flex" }
              : !this.state.toggle
              ? { display: "none" }
              : null
          }
        >
          <Icons />
        </section>
      </div>
    );
  }
}

export default Contact;
