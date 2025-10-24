import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import MyProfile from "../pages/MyProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import ViewDetails from "../pages/ViewDetails";
import PrivateRoute from "../AuthProvider/PrivateRoute";
import ForgetPassword from "../pages/ForgetPassword";
import ErrorPage from "../pages/ErrorPage";
import Loading from "../pages/Loading";
const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
        loader: () => fetch("/pet.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("/pet.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/profile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/forget-password",
        element: <ForgetPassword></ForgetPassword>,
      },
    ],
  },

  {
    path: "/view-details/:id",
    element: (
      <PrivateRoute>
        <ViewDetails></ViewDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/pet.json"),
  },
]);
export default router;
