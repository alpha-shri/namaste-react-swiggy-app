// import React, { useEffect, useState } from "react";
// import { fetchRestaurantDataById } from "../services/ApiService";
import { Link, useParams } from "react-router-dom";
import Shimmer from "./../components/Shimmer";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  // const params = useParams();
  const { id } = useParams();
  {
    /*
  const [menuItem, setMenuItem] = useState({});

  useEffect(() => {
    fetchRecipeById();
  }, []);

  const fetchRecipeById = async () => {
    const data = await fetchRestaurantDataById(params.id);
    setMenuItem(data);
  };
*/
  }
  // TODO: CUSTOM HOOK CREATION
  const menuItem = useRestaurantMenu(id);

  if (menuItem === null) return <Shimmer />;

  return (
    <div className="menu">
      <Link to={"/"}>
        <b>Go back Home </b>
      </Link>
      <h1>{menuItem.name}</h1>
      <h2>
        <b>Cuisine: </b>
        {menuItem.cuisine}
      </h2>
      <ul>
        <li>
          <b>Ingredients:</b> {menuItem.ingredients}
        </li>
        <li>
          <b>Instructions: </b>
          {menuItem?.instructions}
        </li>
        <li>
          <b>Rating: </b>
          {menuItem.rating}
        </li>
        <li>
          <img className="res-logo" src={menuItem.image} />
        </li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
