import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../slices/CartSlice";
import { Link, useNavigate } from "react-router-dom";

const RestaurantCard = (props) => {
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };

  // style={{backgroundColor: 'red'}}
  // first {} ==> Start writing in JSX
  // 2nd {} ==> It requires object.

  const { id, name, cuisine, rating, image, prepTimeMinutes, reviewCount } =
    props.resData ?? [];

  const item = props.resData;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    // dispatch item
    dispatch(addItem(item));
    // Redux internally creates the payload object
    // {
    //   payload: "pizza"
    // }
  };

  const handleShowDetails = () => {
    navigate("/restuarants/" + id);
  };

  return (
    <div className="res-card shadow-lg" style={styleCard}>
      <div className="menu-item" key={id}>
        <img className="res-logo" src={image} alt="res-logo" />
        <h3 className="font-bold">{name}</h3>
        <h4>{cuisine}</h4>
        <h4> {rating} Star</h4>
        <h5>Delivery Time: {prepTimeMinutes} mins</h5>

        <button
          onClick={handleShowDetails}
          type="button"
          class="inline-flex w-full items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-400 p-2 text-sm font-medium  text-white hover:bg-primary-800
          dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer my-2"
        >
          Show Details
        </button>
        <button
          onClick={() => handleAddToCart(item)}
          // onClick={handlAddToCart}
          // onClick={handlAddToCart(name)}
          type="button"
          class="inline-flex w-full items-center justify-center rounded-lg bg-blue-500 p-2 text-sm font-medium  text-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer"
        >
          <svg
            class="-ms-2 me-2 h-5 w-5"
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
          Add to cart
        </button>
      </div>
    </div>
  );
};

// RestaurantCard (Input) ==>> RestaurantCardBestSeller

// eslint-disable-next-line no-unused-vars
export const withBestSellerLabel = (RestaurantCard) => {
  return (props) => {
    // to return component
    return (
      <div>
        <label
          htmlFor=""
          className="absolute bg-black text-white m-2 p-2 rounded-lg"
        >
          BestSeller
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
