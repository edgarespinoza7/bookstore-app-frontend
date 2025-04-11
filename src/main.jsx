import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routers/router.jsx";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "sweetalert2/dist/sweetalert2.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
