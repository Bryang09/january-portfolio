import React from "react";

import { Link } from "react-router-dom";

import "./Burger.scss";

const Burger = props => {
  console.log(props);
  return (
    <div className="Burger">
      <div className="burgerButton" onClick={props.click}>
        <div
          className="line line1"
          style={
            props.burger
              ? {
                  transform: "translate(1px, 7px) rotate(45deg)",
                  width: "100%"
                }
              : null
          }
        />
        <div
          className="line line2"
          style={props.burger ? { display: "none" } : null}
        />
        <div
          className="line line3"
          style={
            props.burger
              ? { transform: "translate(1px, 0) rotate(-45deg)" }
              : null
          }
        />
      </div>
      <div
        className="Navigation"
        style={props.burger ? { display: "flex" } : { display: "none" }}
      >
        <h2>
          <Link
            to="/"
            style={{ color: "#fff", fontSize: "1.5em" }}
          >{`<bg />`}</Link>
        </h2>
        <h3 className="burgerOptions">
          <Link to="/about">about</Link>
        </h3>
        <h3 className="burgerOptions">
          <Link to="/about">projects</Link>
        </h3>
        <h3 className="burgerOptions">
          <Link to="/about">contact</Link>
        </h3>
        <h3 className="burgerOptions">
          <Link to="/about">resume</Link>
        </h3>
      </div>
    </div>
  );
};

export default Burger;
