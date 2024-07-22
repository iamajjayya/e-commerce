import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "swiper/css";

// Bootstrap CSS and JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// Fonts and Icons
import "./assets/css/icofont.min.css";
import "./assets/css/animate.css";
import "./assets/css/style.min.css";

// Pages and Components
import Home from "./Home/Home.jsx";
import Shop from "./Shop/Shop.jsx";
import Blog from "./blog/Blog.jsx";
import SingleProduct from "./Shop/SingleProduct.jsx";
import CartPage from "./Shop/CartPage.jsx";
import SingleBlog from "./blog/SingleBlog.jsx";
import About from "./assets/About/About.jsx";
import Contact from "./ContactPage/Contact.jsx";
import Login from "./Components/Login.jsx";

// Auth and Private Route
import AuthProvider from "./Contexts/AuthProvider.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:id", element: <SingleBlog /> },
      { path: "shop", element: <Shop /> },
      { path: "shop/:id", element: <SingleProduct /> },
      {
        path: "cart-page",
        element: (
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        ),
      },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
