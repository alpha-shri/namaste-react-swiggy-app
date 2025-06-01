import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { apiData } from "../utils/mockData";

const Body = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(apiData);
  }, []);

  const handleClick = () => {
    console.log("Button Clicked..");
    const filteredData = recipes.filter((data) => data.rating > 4.7);
    setRecipes(filteredData);
    console.log("Filtered Data: ", filteredData);
  };

  return (
    <>
      <div className="body">
        <div className="search">Search Bar</div>
        <div className="filter">
          <button className="filter-button" onClick={handleClick}>
            Top Rated Restaurants
          </button>
        </div>
        <div className="res-container">
          {recipes.map((data) => (
            <RestaurantCard key={data.id} resData={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
