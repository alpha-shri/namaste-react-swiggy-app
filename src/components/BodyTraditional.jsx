import { useContext, useEffect, useRef, useState } from "react";
import RestaurantCard, { withBestSellerLabel } from "./RestaurantCard.jsx";
// import { apiData } from "../utils/mockData";
import { fetchRestaurantData_API } from "../services/ApiService";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./../hooks/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

const BodyTraditional = () => {
  const [recipes, setRecipes] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);

  // Higher order component
  // Passing the RestaurantCard component as --INPUT--

  const RestaurantCardBestSeller = withBestSellerLabel(RestaurantCard);

  const searchTextRef = useRef();

  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

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
      <div className="body flex p-4">
        <div className="search font-bold">Search Bar</div>
        <div className="search-bar flex flex-row w-md items-center">
          {/* <input type="text" name="search" id="" className="search-input" /> */}
          <input
            type="text"
            id="first_name"
            className="border-black rounded-md border-1 p-4 h-10 w-full"
            placeholder="Search Menu Item"
            ref={searchTextRef}
            required
          />
          <button
            className="filter-button w-35 cursor-pointer bg-green-600 p-2 rounded-md text-white
            mx-auto h-auto transition-shadow duration-300
            hover:bg-green-500
            shadow-lg hover:shadow-gray-400"
            onClick={handleSearchFunctionality}
          >
            Search
          </button>
          <button
            className="w-30 h-10 cursor-pointer bg-gray-400 p-2 rounded-md text-white hover:bg-gray-300
            shadow-lg shadow-gray-400"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
        <div className="filter">
          <button className="filter-button" onClick={handleTopRestaurant}>
            Top Rated Restaurants
          </button>
          <input
            type="text"
            id="first_name"
            className="border-black rounded-md border-1 p-4 h-10 w-sm"
            onChange={(e) => setUserName(e.target.value)}
            value={loggedInUser}
            required
          />
        </div>
        <div className="res-container rounded-sm ">
          {filteredRestaurantData &&
            filteredRestaurantData.map((data) => (
              <Link to={"/restuarants/" + data.id} key={data.id}>
                {data.rating >= 4.9 ? (
                  <RestaurantCardBestSeller resData={data} />
                ) : (
                  <RestaurantCard resData={data} />
                )}
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default BodyTraditional;
