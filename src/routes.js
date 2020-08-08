import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// import VoteLogin from "./pages/VoteLogin";

import Home from "./pages/Home";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      {/* <Route path="/vote" component={VoteLogin} /> */}
      {/* <Route path="/manage-election" component={TeacherForm} /> */}
    </BrowserRouter>
  );
}

export default Routes;
