import { Headphones } from "../headphones/Headphones";
import { Layout } from "../layout/Layout";

export const App = () => {
  return (
    <Layout sidebar={<div>sidebar</div>}>
      <Headphones />
    </Layout>
  );
};
