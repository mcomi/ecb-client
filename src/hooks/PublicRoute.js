import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../Context";

export default function PublicRoute({
  component: Component,
  restricted,
  ...rest
}) {
  const { isAuth } = useContext(Context);
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        isAuth && restricted ? (
          <Redirect to="/home" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
