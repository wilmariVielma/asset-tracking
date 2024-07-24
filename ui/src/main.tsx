import "@mantine/core/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";

import { MantineProvider } from "@mantine/core";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SedesNew from "./pages/sedes-new";
import SedesList from "./pages/sedes-list";
import Layout from "./layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/sedes",
        element: <SedesList />,
      },
      {
        path: "/sedes/new",
        element: <SedesNew />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
      <Toaster />
    </MantineProvider>
  </React.StrictMode>
);
