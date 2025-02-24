"use client";

import { User } from "./user";
import { use } from "react";
import { UsersContext } from "../users-context";

export const UserContainer = ({ id }) => {
  const users = use(UsersContext);

  const user = users?.find(({ id: userId }) => userId === id);

  if (!user?.name) {
    return null;
  }

  return <User name={user.name} />;
};
