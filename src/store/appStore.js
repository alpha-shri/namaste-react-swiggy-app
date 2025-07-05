import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../slices/CartSlice";
//  Creating the Database
// Creating Store

const appStore = configureStore({
  // for each slice, different reducer.
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
