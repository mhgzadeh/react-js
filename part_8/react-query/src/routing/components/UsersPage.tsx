import UserDetail from "./UserDetail";
import UsersList from "./UsersList";

const UsersPage = () => {
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
