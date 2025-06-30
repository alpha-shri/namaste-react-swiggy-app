import React from "react";

const RestaurantCard = (props) => {
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };

  // style={{backgroundColor: 'red'}}
  // first {} ==> Start writing in JSX
  // 2nd {} ==> It requires object.

  const { name, cuisine, rating, image, prepTimeMinutes } = props.resData ?? [];

  return (
    <div className="res-card shadow-lg" style={styleCard}>
      <div className="menu-item">
        <img className="res-logo" src={image} alt="res-logo" />
        <h3 className="font-bold">{name}</h3>
        <h4>{cuisine}</h4>
        <h4> {rating} Star</h4>
        <h5>Delivery Time: {prepTimeMinutes} mins</h5>
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
