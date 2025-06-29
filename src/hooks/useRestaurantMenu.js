import { useEffect, useState } from "react";
import { fetchRestaurantDataById } from "./../services/ApiService";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchRecipeById(resId);
  }, []);

  const fetchRecipeById = async (resId) => {
    const data = await fetchRestaurantDataById(resId);
    setResInfo(data);
  };
  return resInfo;
};

export default useRestaurantMenu;
