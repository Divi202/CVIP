import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Men from "./components/Men.jsx";
import Women from "./components/Women.jsx";
import Contact from "./components/Contact.jsx";
import Cart from "./components/Cart.jsx";
import Products from "./components/Products.jsx";
import Checkout from "./components/Checkout.jsx";
import FullCart from "./components/FullCart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/men",
    element: <Men />,
  },
  {
    path: "/women",
    element: <Women />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/product",
    element: <Products />,
  },
  {
    path: "/chk",
    element: <Checkout />,
  },
  {
    path: "/fullcart",
    element: <FullCart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
