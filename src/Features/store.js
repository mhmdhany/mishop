import cartSlice from "./slices/cartSlice";
import productsSlice from "./slices/productsSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice
  }
})

export default store;