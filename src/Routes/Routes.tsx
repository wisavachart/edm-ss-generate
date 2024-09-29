import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
// import Dashboard from "../pages/Dashboard";
import CreateHTML from "../pages/CreateHTML";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <CreateHTML />,
      },
      // {
      //   path: "/create",
      //   element: <CreateHTML />,
      // },
    ],
  },
]);
