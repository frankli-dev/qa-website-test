import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Layout from "components/Layout";
import ModuleRoutes from "routes";
import FallBack from "components/Fallback";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {ModuleRoutes.map((route) => {
          return (
            <Route
              path={route.path}
              key={route.path}
              element={
                <React.Suspense fallback={<FallBack />}>
                  <Layout>{React.createElement(route.element)}</Layout>
                </React.Suspense>
              }
            />
          );
        })}
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
