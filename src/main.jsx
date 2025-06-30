import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import AboutPage from "./components/AboutPage.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./components/HomePage";
// import ErrorPage from "./components/ErrorPage";
// import ContactPage from "./components/ContactPage.jsx";
// import BodyTraditional from "./components/BodyTraditional.jsx";
// import RestaurantMenu from "./pages/RestaurantMenu.jsx";
// import SwiggyInstamart from "./pages/SwiggyInstamart.jsx";

// const LazySwiggyInstamart = React.lazy(() =>
//   import("./pages/SwiggyInstamart.jsx")
// );

// const LazyAboutPage = lazy(() => import("./components/AboutPage.jsx"));

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//     children: [
//       {
//         path: "/",
//         element: <BodyTraditional />,
//       },
//       {
//         path: "/about",
//         element: (
//           <Suspense fallback={<h1>Loading..</h1>}>
//             <LazyAboutPage />
//           </Suspense>
//         ),
//         //  <AboutPage />,
//       },
//       {
//         path: "/contact",
//         element: <ContactPage />,
//       },
//       {
//         path: "/restuarants/:id",
//         element: <RestaurantMenu />,
//       },
//       {
//         path: "/instamart",
//         element: (
//           <Suspense fallback={<h1>Loading..</h1>}>
//             <LazySwiggyInstamart />
//           </Suspense>
//         ),
//       },
//     ],
//     errorElement: <ErrorPage />,
//   },
//   // {
//   //   path: "/about",
//   //   element: <AboutPage />,
//   // },
//   // {
//   //   path: "/contact",
//   //   element: <ContactPage />,
//   // },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <RouterProvider router={appRouter} /> */}
  </StrictMode>
);
