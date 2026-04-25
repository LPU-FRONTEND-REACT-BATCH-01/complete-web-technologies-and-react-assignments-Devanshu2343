import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDataThunk = createAsyncThunk("products/fetch", async () => {
  try {
    const res = await axios.get("https://dummyjson.com/products");
    return res.data.products;
  } catch (error) {
    return error;
  }
});
