import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import UsersPage from "./components/UsersPage";
import ContactPage from "./components/ContactPage";
import UserDetail from "./components/UserDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "users",
        element: <UsersPage />,
        children: [{ path: ":id", element: <UserDetail /> }],
      },
      { path: "contacts", element: <ContactPage /> },
    ],
  },
]);

export default router;
