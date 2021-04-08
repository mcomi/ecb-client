import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Home, Customers } from "./pages/";
import PublicRoute from "./hooks/PublicRoute";
import PrivateRoute from "./hooks/PrivateRoute";

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute component={Home} path="/" exact />
        <PublicRoute component={Customers} path="/customers" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
