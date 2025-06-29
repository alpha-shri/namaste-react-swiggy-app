import axios from "axios";
import { URI_RECIPES } from "../utils/constants";

export const fetchRestaurantData_API = async () => {
  const response = await axios.get(URI_RECIPES);
  return response.status === 200 ? response?.data?.recipes : [];
};

export const fetchRestaurantDataById = async (id) => {
  const response = await axios.get(URI_RECIPES + `/${id}`);
  return response.status === 200 ? response?.data : {};
};
