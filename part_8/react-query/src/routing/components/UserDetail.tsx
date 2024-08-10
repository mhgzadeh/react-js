import { useLocation, useParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();
  // const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);
  console.log(params);

  if (params.id) return <p>User {params.id}</p>;
};

export default UserDetail;
