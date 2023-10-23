import { lazy } from "react";

const ProfilePage = lazy(() => import("../pages/Profile"));
const HomePage = lazy(() => import("../pages/Home"));

export const PROFILE = "/profile/:username";
export const Home = "/";

const routes = [
    {
        path: Home,
        element: HomePage,
    },
    {
        path: PROFILE,
        element: ProfilePage,
    },
];

export default routes;
