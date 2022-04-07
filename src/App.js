import React, { StrictMode, useEffect } from "react";
import "./styles/globals.scss";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createTheme } from "react-data-table-component";

import "react-loading-skeleton/dist/skeleton.css";
import { BrowserRouter as Route } from "react-router-dom";
import AppRouter from "./Routes/Routes/App";
// const AppRouter = React.lazy(() => import("./Routes/Routes/App"));
const App = () => {
    useEffect(() => {
        const online = () => toast.warning("Back Online");
        const offline = () => toast.warning("No Connection");
        window.addEventListener("online", online);
        window.addEventListener("offline", offline);
    }, []);
    createTheme(
        "solarized",
        {
            text: {
                primary: "#268bd2",
                secondary: "#268bd2",
            },
            background: {
                default: "#222738",
            },
        },
        "dark"
    );
    return (
        <StrictMode>
            <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Route>
                <AppRouter />
            </Route>
        </StrictMode>
    );
};

export default App;
