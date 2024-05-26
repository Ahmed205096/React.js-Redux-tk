import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../../APIS/getAllProducts";

const productReducer = createSlice({
  name: "productReducer",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});


export default productReducer.reducer;
