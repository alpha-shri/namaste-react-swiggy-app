import React, { lazy, Suspense, useEffect, useState } from "react"; // this 'react' is coming from the node_modules
import "./app.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";

import ErrorPage from "./components/ErrorPage";
import ContactPage from "./components/ContactPage.jsx";
import BodyTraditional from "./components/BodyTraditional.jsx";
import RestaurantMenu from "./pages/RestaurantMenu.jsx";
import UserContext from "./utils/UserContext.js";

// const LazyBodyTraditional = React.lazy(() =>
//   import("./components/BodyTraditional")
// );

/**
 * TODO
 *  Header
 *    - Logo
 *    - Nav items
 *
 *  Body
 *    - Search box
 *    - Resturant Container
 *        - Restaurant Card
 *  - Img
 *  - Name of Res, Star rating,
 *
 *  Footer
 *    - Copyrights
 *    - Company links
 *
 */

const LazySwiggyInstamart = React.lazy(() =>
  import("./pages/SwiggyInstamart.jsx")
);

const LazyAboutPage = lazy(() => import("./components/AboutPage.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: <BodyTraditional />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <LazyAboutPage />
          </Suspense>
        ),
        //  <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/restuarants/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <LazySwiggyInstamart />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/about",
  //   element: <AboutPage />,
  // },
  // {
  //   path: "/contact",
  //   element: <ContactPage />,
  // },
]);

function App() {
  const [userName, setUserName] = useState();

  // Authentication and userInfo
  useEffect(() => {
    // Make API call to get the userInfo
    const data = {
      name: "Shrijeet Panda",
    };
    setUserName(data.name);
  }, []);

  return (
    <>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <RouterProvider router={appRouter} />
      </UserContext.Provider>
    </>
  );
}

export default App;
