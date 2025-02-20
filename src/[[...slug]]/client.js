"use client";

import dynamic from "next/dynamic";

const App = dynamic(() => import("../../components/app/app"), { ssr: false });

export const AppClient = () => {
  return <App />;
};
