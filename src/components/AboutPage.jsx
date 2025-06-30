import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const AboutPage = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <>
      <h2 className="text-2xl">Welcome Mr. {loggedInUser}</h2>
      <h1>AboutPage</h1>
    </>
  );
};

export default AboutPage;
