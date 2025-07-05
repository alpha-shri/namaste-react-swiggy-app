import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  // reducer means Service-class
  // @Service
  reducers: {
    //! Mutating the state directly.
    //* Redux: pass the payload object to the 2nd param in action
    // {
    //   payload: "pizza"
    // }

    //! Vanialla (older) Redux DON"T MUTATE STATE
    //* const newState = [...state);
    //* newState.items.push(action.payload);
    //* return newState;
    //* return was mandatory

    //! RTK ==> Mutate State [WE HAVE TO MODIFY THE STATE]
    //* Redux uses Immer JS to find the difference of the new_state and old_state
    //* Simplifies handling immutate data structure
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0; // []
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
