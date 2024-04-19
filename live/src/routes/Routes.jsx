import { createBrowserRouter, redirect } from "react-router-dom";
import  Dashboard  from "../pages/Dashboard";
import  Login  from "../pages/Login";
import SingleProduct from "../pages/SingleProduct";
import App from "../App.jsx";
import Register from "../pages/Register.jsx";

// function redirectUserIfNotLogged() {
//   return redirect("/");
// }

function redirectIfUserLogged(){
    return redirect("/dashboard")
}
 

export const Router = createBrowserRouter([ 
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    // loader: redirectUserIfNotLogged,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "registrati",
    element: <Register/>,
    loader: redirectIfUserLogged,
  },

  {
    path: "products/:product",
    element: <SingleProduct />,
  },
]);
