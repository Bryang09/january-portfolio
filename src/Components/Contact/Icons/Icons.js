import React, { Component } from "react";

class Icons extends Component {
  state = {
    links: [
      {
        id: 0,
        link: "https://www.linkedin.com/in/bryan-gonzalez09",
        class: "box box1",
        icon: "fab fa-linkedin",
        text: "Linkedin"
      },
      {
        id: 1,
        link: "mailto:bryan.gonzalez1020.bg@gmail.com",
        class: "box box2",
        icon: "fas fa-envelope",
        text: "Email"
      }
    ]
  };

  render() {
    const link = this.state.links.map(res => {
      return (
        <a
          href={res.link}
          target={res.id === 0 ? "_blank" : null}
          rel="noopener noreferrer"
          key={res.id}
        >
          <div className={res.class}>
            <div className="icon">
              <i
                className={res.icon}
                style={
                  res.id === 0 ? { color: "#0077b5" } : { color: "#d54e41" }
                }
              />
            </div>
            <div className="text">
              <h3>{res.text}</h3>
            </div>
          </div>
        </a>
      );
    });
    return link;
  }
}
export default Icons;
