import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existItem = state.find(
        (item) => item.id === action.payload.id
      );
      if (existItem) {
        existItem.quantity += 1;
      } else {
        const productsClone = { ...action.payload, quantity: 1 };
        state.push(productsClone);
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clear: (state, action) => {
     return [];
    },
  },
});

export const { addToCart, removeFromCart, clear } = cartSlice.actions;
export default cartSlice.reducer;
