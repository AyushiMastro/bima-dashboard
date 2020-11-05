import logo from "./logo.svg";
import React from "react";
import "./statics/scss/index.sass";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidenav from "./components/Sidenav";
import Dash from "./components/Dashboard";
import Categories from "./components/Categories";
import VerificationRequest from "./components/VerificationRequest";
import User from "./components/User";
import UserHistory from "./components/UserHistory";
import Sound from "./components/Sound";
import Vedios from "./components/Vedios";
import Profile from "./components/Profile";
import UserInfo from "./components/UserInfo";
import ManageVedios from "./components/ManageVedios";
import ExploreVedio from "./components/ExploreVedio";
import Recharge from "./components/Recharge";



function App() {
  return (
    <Sidenav>
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Dash} />
          <Route path="/Category" exact={true} component={Categories} />
          <Route
            path="/VerificationRequest"
            exact={true}
            component={VerificationRequest}
          />
          <Route path="/User" exact={true} component={User} />
          <Route path="/History" exact={true} component={UserHistory} />
          <Route path="/Sound" exact={true} component={Sound} />
          <Route path="/Vedios" exact={true} component={Vedios} />
          <Route path="/Profile" exact={true} component={Profile} />
          <Route path="/Info" exact={true} component={UserInfo} />
          <Route path="/ManageVedio" exact={true} component={ManageVedios} />
          <Route path="/Explore" exact={true} component={ExploreVedio} />
          <Route path="/Recharge" exact={true} component={Recharge} />
        </Switch>
      </Router>
    </Sidenav>
  );
}

export default App;
