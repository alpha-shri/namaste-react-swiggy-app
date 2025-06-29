import { useEffect, useRef, useState } from "react";
import RestaurantCard from "./RestaurantCard";
// import { apiData } from "../utils/mockData";
import { fetchRestaurantData_API } from "../services/ApiService";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./../hooks/useOnlineStatus.js";

const BodyTraditional = () => {
  const [recipes, setRecipes] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);

  const searchTextRef = useRef();

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchRestaurantData()
      .catch((error) => {
        setIsError(true);
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const fetchRestaurantData = async () => {
    const fetchedData = await fetchRestaurantData_API();
    setRecipes(fetchedData);
    setFilteredRestaurantData(fetchedData);
    setIsLoading(false);
  };

  const handleTopRestaurant = () => {
    setIsLoading(true);
    console.log("Button Clicked..");
    const filteredData = recipes.filter((data) => data.rating > 4.7);
    setFilteredRestaurantData(filteredData);
    console.log("Filtered Data: ", filteredData);
    setIsLoading(false);
  };

  const handleSearchFunctionality = () => {
    const searchTextValue = searchTextRef.current.value;
    console.log(searchTextValue);

    const filteredData = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTextValue.toLowerCase())
    );
    console.log(filteredData);

    setFilteredRestaurantData(filteredData);
    searchTextRef.current.value = "";
  };

  const handleClear = () => {
    setFilteredRestaurantData(recipes);
  };

  if (isError) {
    return <h2>Oops! Something went wrong. {error.message}</h2>;
  }

  // if (recipes.length === 0 || isLoading) {
  if (isLoading) {
    console.log("isLoading: ", isLoading);

    return (
      // Industry standard to use Shimmer UI
      <>
        <div className="res-container">
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
        </div>
      </>
      // <h2 style={{ display: "flex", alignItems: "center" }}>Loading...</h2>
    );
  }

  if (!onlineStatus)
    return <h1>Looks like you're offline, please check your internet</h1>;

  return (
    <>
      <div className="body">
        <div className="search">Search Bar</div>
        <div className="search-bar">
          <input
            type="text"
            name="search"
            id=""
            className="search-input"
            ref={searchTextRef}
          />
          <button className="filter-button" onClick={handleSearchFunctionality}>
            Search
          </button>
          <button className="filter-button" onClick={handleClear}>
            Clear
          </button>
        </div>
        <div className="filter">
          <button className="filter-button" onClick={handleTopRestaurant}>
            Top Rated Restaurants
          </button>
        </div>
        <div className="res-container">
          {filteredRestaurantData &&
            filteredRestaurantData.map((data) => (
              <Link to={"/restuarants/" + data.id} key={data.id}>
                <RestaurantCard resData={data} />
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default BodyTraditional;
