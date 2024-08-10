import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
        mollitia!
      </p>
      <Link to={"/users"}>Users</Link>
      <br />
      <Link to={"/contact"}>Contact</Link>
    </div>
  );
};

export default HomePage;
