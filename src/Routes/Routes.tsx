import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Dashboard from "../pages/Dashboard";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      // {
      //   path: "/works",
      //   element: <Work />,
      // },
    ],
  },
]);
