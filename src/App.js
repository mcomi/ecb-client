import React, { Suspense } from "react";
import Layout from "./components/Layout";
import AppRouter from "./Route";

function App() {
  return (
    <Suspense fallback={<div />}>
      <Layout>
        <AppRouter />
      </Layout>
    </Suspense>
  );
}

export default App;
