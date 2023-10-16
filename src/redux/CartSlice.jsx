import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_CART(state, action) {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    },
    RMV_CART(state, action) {
      return {
        ...state,
        cart: state.cart.filter((e) => e.id != action.payload),
      };
    },
  },
});

export const { ADD_CART, RMV_CART } = CartSlice.actions;
export default CartSlice.reducer;
