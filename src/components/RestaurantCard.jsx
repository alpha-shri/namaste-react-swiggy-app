import React from "react";

const RestaurantCard = (props) => {
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };

  // style={{backgroundColor: 'red'}}
  // first {} ==> Start writing in JSX
  // 2nd {} ==> It requires object.

  const { name, cuisine, rating, image, prepTimeMinutes } = props.resData ?? [];

  const handleOpenMenu = () => {

  }

  return (
    <div className="res-card" style={styleCard} onClick={handleOpenMenu}>
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

export default RestaurantCard;
