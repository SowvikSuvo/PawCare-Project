import { createBrowserRouter } from "react-router";
import HomeLayout from "../HomeLayout/HomeLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import MyProfile from "../pages/MyProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
        loader: () => fetch("/pet.json"),
        hydrateFallbackElement: (
          <span className="loading loading-spinner text-warning"></span>
        ),
      },
      {
        path: "/services/:id",
        element: <Services></Services>,
      },
      {
        path: "/profile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
]);
export default router;
