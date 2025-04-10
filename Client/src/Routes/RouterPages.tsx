import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import ErrorElement from "../Layout/ErrorElement";
import Home from "../Pages/Home";

const RouterPages = () => {
  const RouterPages = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      errorElement: <ErrorElement />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={RouterPages}></RouterProvider>;
};

export default RouterPages;
