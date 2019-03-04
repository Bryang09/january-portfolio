import React from "react";

import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Project from "./Components/Projects/Project/Project";
// import Contact from "./Components/Contact/Contact";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/projects/:tech/:id" component={Project} />
      {/* <Route exact path="/contact" component={Contact} /> */}
    </Switch>
  );
};

export default Routes;
