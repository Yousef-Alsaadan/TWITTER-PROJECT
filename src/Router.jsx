import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import CreateAcount from "./pages/CreateAcount";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  { path: "/signin", element: <Signin /> },
  { path: "/createaccount", element: <CreateAcount /> },
  { path: "/profile", element: <Profile /> },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
