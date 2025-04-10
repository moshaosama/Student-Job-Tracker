import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import ErrorElement from "../Layout/ErrorElement";
import Home from "../Pages/Home";
import Jops from "../Pages/Jops";
import DetailJop from "../Pages/DetailJop";

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
        {
          path: "jops",
          element: <Jops />,
        },
        {
          path: "jops/:id",
          element: <DetailJop />,
        },
      ],
    },
  ]);

  return <RouterProvider router={RouterPages}></RouterProvider>;
};

export default RouterPages;
