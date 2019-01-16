import React, { Component } from "react";

import Nav from "../Nav/Nav";
import "./Contact.scss";

class Contact extends Component {
  state = {
    toggle: false
  };

  onToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    console.log(this.props);
    return (
      <div className="Contact">
        <Nav location={this.props.location.pathname} />
        <div
          className="bg"
          style={
            this.state.toggle
              ? {
                  height: "60vh",
                  backgroundImage: `url(/static/media/bg2.945f029d.svg)`
                }
              : this.state.toggle
              ? {
                  height: "60vh",
                  backgroundImage: `url(/static/media/bg2.945f029d.svg)`
                }
              : {
                  height: "100vh",
                  background: `linear-gradient(#39FFF1,#9C8AF6)`
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
          <a
            href="https://www.linkedin.com/in/bryan-gonzalez09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="box box1">
              <div className="icon">
                <i className="fab fa-linkedin" />
              </div>
              <div className="text">
                <h3>Linkedin</h3>
              </div>
            </div>{" "}
          </a>

          <a href="mailto:bryan.gonzalez1020.bg@gmail.com">
            <div className="box box2">
              <div className="icon">
                <i className="fas fa-envelope" />
              </div>
              <div className="text">
                <h3>Gmail</h3>
              </div>
            </div>
          </a>
        </section>
      </div>
    );
  }
}

export default Contact;
