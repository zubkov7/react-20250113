import { AuthContext } from "../auth-context";
import { Cart } from "../cart/cart";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";
import { use } from "react";
import { Outlet } from "react-router";

export const Layout = () => {
  const { auth } = use(AuthContext);

  const { isAuthorized } = auth;

  return (
    <div>
      <ProgressBar viewVariant='colored' />
      <Header />
      <Outlet />
      {isAuthorized && <Cart />}
      <Footer />
    </div>
  );
};
