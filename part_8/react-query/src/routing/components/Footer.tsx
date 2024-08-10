import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-light text-dark p-3 my-5">
      <h4> Footer</h4>
      <Link className="text-warning" to={"/contact"}>
        Contact
      </Link>
    </div>
  );
};

export default Footer;
