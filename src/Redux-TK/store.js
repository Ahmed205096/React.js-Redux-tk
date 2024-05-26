import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Slices/ProductReducer";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
  },
});
