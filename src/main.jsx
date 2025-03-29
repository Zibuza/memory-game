import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";  // Ensure these components are correct
import Game from "./Pages/Game";  // Ensure these components are correct
import App from "./App"; // Import App component

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />, // Render the App component for the base path
      children: [
        {
          path: "/",
          element: <Home />, // Home page
        },
        {
          path: "/:theme/:players/:grid/:round",
          element: <Game />, // Game page with dynamic parameters
        },
      ],
    },
  ]
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
