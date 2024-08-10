import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import UserListPage from "./components/UserListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "users", element: <UserListPage /> },
      { path: "users/:id", element: <ContactPage /> },
    ],
  },
]);

export default router;
