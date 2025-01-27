import { HeadphonesPage } from "../headphones-page/headphones-page";
import { Layout } from "../layout/layout";

import "./reset.css";

export const App = () => {
  return (
    <Layout>
      <HeadphonesPage title='headphones app' />
    </Layout>
  );
};
