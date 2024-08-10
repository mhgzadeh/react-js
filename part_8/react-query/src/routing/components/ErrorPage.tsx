import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="container mt-3">
      <h1>Oops...</h1>
      <p>{isRouteErrorResponse(error)? error.statusText : 'Sorry, an unexpected error has occurred.'}</p>
      <Link to={"/"} className="btn btn-warning">
        Back to the main page
      </Link>
    </div>
  );
};

export default ErrorPage;
