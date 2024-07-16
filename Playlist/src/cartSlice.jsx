import { createSlice } from "@reduxjs/toolkit";
import cartItems from "./data/cartItems";

const initialState = {
  items: cartItems,
  totalAmount: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.amount += 1;
      }
    },
    decrease: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (item.amount > 1) {
          item.amount -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    calculateTotals: (state) => {
      let totalAmount = 0;
      let totalCount = 0;
      state.items.forEach((item) => {
        totalAmount += item.price * item.amount;
        totalCount += item.amount;
      });
      state.totalAmount = totalAmount;
      state.totalCount = totalCount;
    },
  },
});

export const { increase, decrease, removeItem, clearCart, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
