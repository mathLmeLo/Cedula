import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import VoteLogin from "./pages/VoteLogin";

import Home from "./pages/Home";
import VoteManager from "./pages/VoteManager";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/vote" component={VoteLogin} />
      <Route path="/manage-election" component={VoteManager} />
    </BrowserRouter>
  );
}

export default Routes;
