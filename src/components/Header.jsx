import React, { useEffect, useState } from "react";
import logoFood from "./../assets/img/logoFood.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";

const LazyAboutPage = React.lazy(() => "./AboutPage.tsx");
const LazyContactPage = React.lazy(() => "./ContactPage.tsx");
const LazyHomePage = React.lazy(() => "./HomePage.tsx");

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("useEffect called..");
  }, []);
  /*
    useEffect(() => {
        console.log("useEffect called..");
      });
    TODO: if useEffect(() => {}) has no dependencies, then it will on everytime the component is rendered, you click button useEffect renders

      useEffect(() => {
        console.log("useEffect called..");
      }, []);

    TODO: If empty_array[] dependency, then it will render once when component loads for the first_time.
  */

  const logout = () => {
    console.log("Logout");
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" height={100} src={logoFood} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/instamart"}>Instamart</Link>
          </li>
          <li>Cart</li>
          <button onClick={logout}>{isLoggedIn ? "Logout" : "Login"}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
