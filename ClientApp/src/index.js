import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Home from "views/Components/Sections/Home.js";
import Kontakt from "views/LandingPage/Kontakt.js";
import ITBeratung from "views/Leistungen/ITBeratung.js";
import SoftwareEntwicklung from "views/LandingPage/SoftwareEntwicklung.js";
import Impressum from "views/Leistungen/Impressum.js";
import Datenschutz from "views/Leistungen/Datenschutz.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/kontakt" component={Kontakt} />
      <Route path="/software-entwicklung" component={SoftwareEntwicklung} />
      <Route path="/it-beratung" component={ITBeratung} />
      <Route path="/impressum" component={Impressum} />
      <Route path="/datenschutz" component={Datenschutz} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
