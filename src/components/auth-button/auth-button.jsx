"use client";

import { use } from "react";
import { Button } from "../button/button";
import { AuthContext } from "../auth-context";

export const AuthButton = () => {
  const { auth, toggleAuth } = use(AuthContext);

  const { isAuthorized, name } = auth;

  return (
    <div>
      {isAuthorized && name && <div>{auth.name}</div>}
      <Button onClick={toggleAuth}>{isAuthorized ? "Logout" : "Login"}</Button>
    </div>
  );
};
