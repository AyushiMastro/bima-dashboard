import logo from "./logo.svg";
import React from "react";
import "./statics/scss/index.sass";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidenav from "./components/Sidenav";
import Dash from "./components/Dashboard";
import Categories from "./components/Categories";
import Prospects from "./components/Prospects";

function App() {
  return (
    <Sidenav>
      <Router>
        <Switch>
          {/* <Route path="/sidenav" component={Sidenav} />
        <Route path="/work" component={Work} />
        <Route path="/projects" component={Project} /> */}
          <Route path="/" exact={true} component={Dash} />
          <Route path="/Category" exact={true} component={Categories} />
          <Route path="/Prospect" exact={true} component={Prospects} />
        </Switch>
      </Router>
    </Sidenav>
  );
}

export default App;
