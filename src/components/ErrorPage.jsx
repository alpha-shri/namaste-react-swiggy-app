import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(`Error: ${err}`);

  return (
    <>
      <h1>Oops!!</h1>
      <h1>Something went wrong, please try again</h1>
      <h2>
        {err.status}: {err.statusText}{" "}
      </h2>
      <Link to={"/"}>
        <button>Go back to Homepage</button>
      </Link>
    </>
  );
};

export default ErrorPage;
