"use client";

import { use } from "react";
import { HeadphoneCounter } from "../headphone-counter/headphone-counter";
import { TabLink } from "../tab-link/tab-link";
import { AuthContext } from "../auth-context";

export const Headphone = ({ name, brand, id }) => {
  const { auth } = use(AuthContext);

  if (!name) {
    return null;
  }

  return (
    <section>
      <h2>{name}</h2>
      <h3>Brand</h3>
      <div>{brand}</div>
      {auth.isAuthorized && <HeadphoneCounter id={id} />}
      <TabLink href={`/headphones/${id}/reviews`} title='Reviews' />
      <TabLink href={`/headphones/${id}/codecs`} title='Codecs' />
    </section>
  );
};
