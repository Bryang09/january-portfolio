import React, { Component } from "react";

import Nav from "../Nav/Nav";
import Icons from "./Icons/Icons";

import "./Contact.scss";

// class Contact extends Component {
//   state = {
//     toggle: false
//   };

//   onToggle = () => {
//     this.setState({ toggle: !this.state.toggle });
//   };

//   render() {
//     return (
//       <div className="Contact">
//         <Nav location={this.props.location.pathname} />
//         <div
//           className="bg"
//           style={
//             this.state.toggle
//               ? {
//                   height: "40vh"
//                 }
//               : {
//                   height: "100vh",
//                   background: `linear-gradient(#9C8AF6,#4E457B)`
//                 }
//           }
//         >
//           <h1
//             style={
//               this.state.toggle ? { fontSize: "3em" } : { fontSize: "4em" }
//             }
//           >
//             Lets Work Together!
//           </h1>
//           <h5 onClick={this.onToggle}>Contact</h5>
//         </div>

//         <section
//           className="contactBoxesContainer"
//           style={
//             this.state.toggle
//               ? { display: "flex" }
//               : !this.state.toggle
//               ? { display: "none" }
//               : null
//           }
//         >
//           <Icons />
//         </section>
//       </div>
//     );
//   }
// }

// export default Contact;

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <Nav />
        <div className="contactHero">
          <h1>Contact Me</h1>
        </div>
        <div className="contactForm">
          {/* <form>
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
          </form> */}

          <form class="form validate-form" method="POST" data-netlify="true">
            <span class="form-title">Contact Us</span>

            <div class="inputWrap wrap ">
              <span class="label">Your Name</span>
              <input
                class="input"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <span class="focus-input" />
            </div>

            <div class="inputWrap  wrap  ">
              <span class="label">Email</span>
              <input
                class="input"
                type="text"
                name="email"
                placeholder="Enter your email addess"
              />
              <span class="focus-input" />
            </div>

            <div class="inputWrap ">
              <span class="label">Message</span>
              <textarea
                class="input"
                name="message"
                placeholder="Your message here..."
              />
              <span class="focus-input" />
            </div>

            <div>
              <div data-netlify-recaptcha="true" />
            </div>

            <div class="container-form-btn">
              <button class="form-btn">
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
