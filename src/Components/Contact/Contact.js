import React, { Component } from "react";

// import axios from "axios";

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

// const encode = data => {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// };

// class Contact extends Component {
//   state = {
//     name: "",
//     email: "",
//     message: ""
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     axios
//       .post("/", {
//         email: this.state.email,
//         name: this.state.name,
//         message: this.state.message
//       })

//       .then(() => console.log("success"))
//       .catch(err => console.log(err));
//   };

//   handleChange = e => this.setState({ [e.target.name]: e.target.value });
//   render() {
//     const { name, email, message } = this.state;
//     return (
//       <div className="Contact">
//         <Nav />
//         <div className="contactHero">
//           <h1>Contact Me</h1>
//         </div>
//         <div className="contactForm">

/* <form>
            <div className="names">
              <input type="text" name="firstName" placeholder="First Name" />
              <input type="text" name="lastName" placeholder="Last Name" />
            </div>
            <input type="email" name="email" placeholder="Email" id="email" />
            <textarea
              name="message"
              placeholder="Message"
              cols="30"
              rows="10"
              id="message"
            />
          </form> */

/* <form
            className="form validate-form"
            onSubmit={this.handleSubmit}
            data-netlify="true"
          >
            <span className="form-title">Contact Us</span>

            <div className="inputWrap wrap ">
              <span className="label">Your Name</span>
              <input
                className="input"
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder="Enter your name"
              />
              <span className="focus-input" />
            </div>

            <div className="inputWrap  wrap  ">
              <span className="label">Email</span>
              <input
                className="input"
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="Enter your email addess"
              />
              <span className="focus-input" />
            </div>

            <div className="inputWrap ">
              <span className="label">Message</span>
              <textarea
                className="input"
                name="message"
                value={message}
                onChange={this.handleChange}
                placeholder="Your message here..."
              />
              <span className="focus-input" />
            </div>

            <div>
              <div data-netlify-recaptcha="true" />
            </div>

            <div className="container-form-btn">
              <button className="form-btn" type="submit">
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact; */
