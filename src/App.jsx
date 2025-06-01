import React from "react"; // this 'react' is coming from the node_modules
import "./app.css";
import Body from "./components/Body";
import Header from "./components/Header";

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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

function App() {
  return (
    <>
      <AppLayout />
    </>
  );
}

export default App;
