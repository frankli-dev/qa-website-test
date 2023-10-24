import { lazy } from "react";

const QAPage = lazy(() => import("../pages/QA"));

export const QA = "/";

const routes = [
  {
    path: QA,
    element: QAPage,
  },
];

export default routes;
