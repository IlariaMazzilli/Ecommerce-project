import { createBrowserRouter, redirect } from "react-router-dom";
import  Dashboard  from "./pages/Dashboard.jsx";
import  Login  from "./pages/Login.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import App from "./App.jsx";
import Register from "./pages/Register.jsx";

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
    loader: redirectIfUserLogged,
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
