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
import { Auth } from "./features/auth/auth";
import { Employess } from "./pages/employees";
import { AddEmployee } from "./pages/add-employee";
import { Status } from "./pages/status";
import { Employee } from "./pages/employee";
import { EditEmployee } from "./pages/edit-employee";

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([
  { path: PATH.home, element: <Employess /> },
  { path: PATH.login, element: <Login /> },
  { path: PATH.register, element: <Register /> },
  { path: PATH.employeeAdd, element: <AddEmployee /> },
  { path: `${PATH.status}/:status`, element: <Status /> },
  { path: `${PATH.employee}/:id`, element: <Employee /> },
  { path: `${PATH.employeeEdit}/:id`, element: <EditEmployee /> },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <Auth>
          <RouterProvider router={router} />
        </Auth>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
