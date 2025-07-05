import React, { useContext, useEffect, useState } from "react";
import logoFood from "./../assets/img/logoFood.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const LazyAboutPage = React.lazy(() => "./AboutPage.tsx");
const LazyContactPage = React.lazy(() => "./ContactPage.tsx");
const LazyHomePage = React.lazy(() => "./HomePage.tsx");

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const onlineStatus = useOnlineStatus();

  const userInfo = useContext(UserContext);

  // Subscribing to the store, using selector.
  const cartItems = useSelector((store) => store.cart.items);
  console.table(cartItems);

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
            <Link className="hover:text-blue-500 font-bold" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500 font-bold" to={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500 font-bold" to={"/contact"}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500 font-bold" to={"/instamart"}>
              Instamart
            </Link>
          </li>
          <li className="font-bold text-xl">{userInfo.loggedInUser}</li>
          <li className="font-bold p-2">
            <Link className="hover:text-blue-500 font-bold" to={"/cart"}>
              CART ({cartItems.length} items)
            </Link>
            <svg
              class="-ms-2 me-2 h-10 w-10"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
              />
            </svg>
          </li>
          <button onClick={logout}>{isLoggedIn ? "Logout" : "Login"}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
