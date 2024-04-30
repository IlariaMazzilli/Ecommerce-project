import { createBrowserRouter, redirect } from "react-router-dom";
import  Dashboard  from "../pages/Dashboard";
import  Login  from "../pages/Login";
import SingleProduct from "../pages/SingleProduct";
import App from "../App.jsx";
import Register from "../pages/Register.jsx";

function redirectUserIfNotLogged() {
  if (!localStorage.getItem("Utente")){
  return redirect("/");
  } else  {
    return null
  }
}

function redirectIfUserLogged(){
  if (localStorage.getItem("Utente")){
    return redirect("/dashboard");
    } else  {
      return null
    }
   
}
 

export const Router = createBrowserRouter([ 
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
     loader: redirectUserIfNotLogged,
  },
  {
    path: "/login",
    element: <Login />,
    loader: redirectIfUserLogged
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
