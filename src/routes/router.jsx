import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <p>About page</p>,
      },
      {
        path: "career",
        element: <p>Career page</p>,
      },
      {
        path: "category/:id",
        element: <CategoryNews />,
        loader: ()=>fetch('/news.json')
      },
    ],
  },
]);

export default router;
