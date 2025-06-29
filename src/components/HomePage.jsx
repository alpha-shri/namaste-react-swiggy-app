import React from "react";

import BodyTraditional from "./BodyTraditional";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div className="app">
      <Header />

      {/* TODO : My Header component should be present, but the below component should be dynamically rendered as per the route */}
      {/* <BodyTraditional /> */}

      <Outlet />
    </div>
  );
}

export default HomePage;
