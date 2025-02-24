"use client";

import { useSelector } from "react-redux";
import { CartItem } from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/entities/cart/slice";
import { AuthContext } from "../auth-context";
import { use } from "react";

export const Cart = ({ headphones }) => {
  const items = useSelector(selectCartItems);

  const { auth } = use(AuthContext);

  const { isAuthorized } = auth;

  if (!items.length || !isAuthorized) {
    return null;
  }

  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {items.map(({ id }) => (
          <li key={id}>
            <CartItem id={id} headphones={headphones} />
          </li>
        ))}
      </ul>
    </div>
  );
};
