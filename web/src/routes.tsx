import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import CreatePoint from "./pages/CreatePoint";
import Congratulations from "./pages/Congratulations";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} exact path="/" />
      <Route component={CreatePoint} path="/create-point" />
      <Route component={Congratulations} path="/congratulations" />
    </BrowserRouter>
  );
};

export default Routes;
