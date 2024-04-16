import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, redirect } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import './index.css'
// import Routes from '../routes/Routes'

function redirectUserIfNotLogged(){
  return redirect("/")
}

const Router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    loader: redirectUserIfNotLogged
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "registrati",
    element:  <h1>Registrati</h1>,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router} />
)
