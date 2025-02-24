import { CartContainer } from "../cart/cart-container";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";

export const Layout = ({ children }) => {
  return (
    <div>
      <ProgressBar viewVariant='colored' />
      <Header />
      {children}
      <CartContainer />
      <Footer />
    </div>
  );
};
