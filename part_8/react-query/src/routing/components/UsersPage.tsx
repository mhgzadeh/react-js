import UserDetail from "./UserDetail";
import UsersList from "./UsersList";

const UsersPage = () => {
  return (
    <div className="row">
      <div className="col-6">
        <UsersList />
      </div>
      <div className="col-6">
        <UserDetail />
      </div>
    </div>
  );
};

export default UsersPage;
