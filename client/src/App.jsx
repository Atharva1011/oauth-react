import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  Router,
  RouterProvider,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import Hero from "./pages/Hero";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./app.scss";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
