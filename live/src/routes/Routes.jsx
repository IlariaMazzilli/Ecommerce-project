import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";

export const Router = createBrowserRouter([
    
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "dashboard",
        element: <Dashboard />,
    },
    {
        path: "login",
        element: <Login />,
    },
]);