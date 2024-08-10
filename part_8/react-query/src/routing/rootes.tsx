import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import UsersPage from "./components/UsersPage";
import ContactPage from "./components/ContactPage";
import UserDetail from "./components/UserDetail";
import ErrorPage from "./components/ErrorPage";
import LoginPage from "./components/LoginPage";
import PrivateRoutes from "./components/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "contacts", element: <ContactPage /> },
    ],
  },
  {
    element: <PrivateRoutes />,
    path: "users",
    children: [ 
      {
        element: <UsersPage />,
        children: [{ path: ":id", element: <UserDetail /> }],
      },
    ],
  },
]);

export default router;
