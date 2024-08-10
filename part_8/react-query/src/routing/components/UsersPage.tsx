import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import UserDetail from "./UserDetail";
import UsersList from "./UsersList";

const UsersPage = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to={"/login"} />;

  return (
    <div className="row">
      <div className="col">
        <UsersList />
      </div>
      <div className="col">
        <UserDetail />
      </div>
    </div>
  );
};

export default UsersPage;
