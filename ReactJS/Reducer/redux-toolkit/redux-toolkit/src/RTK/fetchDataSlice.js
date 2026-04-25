import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import { fetchDataThunk } from "./fetchDataThunk.";

const fetchDataSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataThunk.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchDataThunk.fulfilled, (state, action) => {
        ((state.loading = false), (state.products = action.payload));
      })

      .addCase(fetchDataThunk.rejected, (state, action) => {
        ((state.loading = false), (state.error = action.payload));
      });
  },
});

export default fetchDataSlice.reducer;
