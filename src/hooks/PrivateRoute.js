import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../Context";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { isAuth } = useContext(Context);

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
