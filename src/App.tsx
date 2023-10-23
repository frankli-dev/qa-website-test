import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import NotFound from "pages/NotFound";
import Layout from "components/Layout";
import ModuleRoutes from "routes";
import FallBack from "components/Fallback";
import { Toaster } from "react-hot-toast";
import AppContext from "context";

axios.interceptors.request.use((config) => {
    const token = process.env.REACT_APP_GITHUB_TOKEN;
    if (token) config.headers.Authorization = `Beaasdfasdfrer ${token}`;
    return config;
});
const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AppContext.Provider value={1}>
            <BrowserRouter>
                <Routes>
                    {ModuleRoutes.map((route) => {
                        return (
                            <Route
                                path={route.path}
                                key={route.path}
                                element={
                                    <React.Suspense fallback={<FallBack />}>
                                        <Layout>
                                            {React.createElement(route.element)}
                                        </Layout>
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
            <Toaster />
            </AppContext.Provider>
        </QueryClientProvider>
    );
}

export default App;
