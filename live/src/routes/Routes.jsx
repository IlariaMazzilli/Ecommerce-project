import { createBrowserRouter, redirect } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import SingleProduct from "../pages/SingleProduct";
import App from "../App.jsx";
import Register from "../pages/Register.jsx";
import Menu from "../components/Menu.jsx";
import { Footer } from "../components/Footer.jsx";
import Cart from "../pages/Cart.jsx";
import FAQs from "../pages/FAQs.jsx";

// function redirectUserIfNotLogged() {
//   return redirect("/");
// }

function redirectIfUserLogged() {
  return redirect("/dashboard")
}


export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: (<div>
      <Menu />
      <Dashboard />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer />
    </div>
    ),
    // loader: redirectUserIfNotLogged,
  },
  {
    path: "/login",
    element: (<div>
      <Menu />
      <Login />
      <Footer />
    </div>),
  },
  {
    path: "register",
    element: (<div>
      <Menu />
      <Register />
      <Footer />
    </div>),
    // loader: redirectIfUserLogged,
  },
  {
    path: "/cart",
    element: (<div>
      <Menu />
      <Cart/>
      <Footer />
    </div>),
  },
  {
    path: "/faqs",
    element: (<div>
      <Menu />
      <FAQs/>
      <Footer />
    </div>),
  },

  {
    path: "products/:productID",
    element: <SingleProduct />,
  },
]);
