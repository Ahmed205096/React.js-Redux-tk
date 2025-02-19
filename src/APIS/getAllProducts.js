import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk(
  "ProductReducer/getAllProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  }
);
