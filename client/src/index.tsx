import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider, theme } from "antd";

import { store } from "./app/store";
import "./index.css";
import { PATH } from "./path";
import Login from "./pages/login";
import Register from "./pages/register";

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([
  { path: PATH.home, element: <h1>Emploees</h1> },
  { path: PATH.login, element: <Login /> },
  { path: PATH.register, element: <Register /> },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
