import React from "react"; // this 'react' is coming from the node_modules
import "./app.css";
import AboutPage from "./components/AboutPage";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/HomePage";

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

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: HomePage,
  },
  {
    path: "/about",
    element: AboutPage,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
