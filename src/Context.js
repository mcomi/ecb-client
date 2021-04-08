import React, { createContext, useState } from "react";
import { isArray } from "util";

// For using authentication we can use this Context

export const Context = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem("token");
  });
  const [user, setUser] = useState(() => {
    return JSON.parse(window.sessionStorage.getItem("user"));
  });

  const value = {
    isAuth,
    activateAuth: (token) => {
      window.sessionStorage.setItem("token", token);
      setIsAuth(true); // mientras no tenga usuarios
    },
    removeAuth: () => {
      setIsAuth(false);
      window.sessionStorage.removeItem("token");
      window.sessionStorage.removeItem("user");
    },
    user,
    saveUser: (user) => {
      setUser(user);
      setIsAuth(true);
      window.sessionStorage.setItem("user", JSON.stringify(user));
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
