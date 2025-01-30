import { HeadphonesPage } from "../headphones-page/headphones-page";
import { Layout } from "../layout/layout";

import "./reset.css";
import "./app.css";
import { ThemeContextProvider } from "../theme-context/theme-context";

export const App = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <HeadphonesPage />
      </Layout>
    </ThemeContextProvider>
  );
};
