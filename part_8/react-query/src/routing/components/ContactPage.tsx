import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        navigate("/");
      }}
    >
      <h1>Contact Page</h1>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ContactPage;
