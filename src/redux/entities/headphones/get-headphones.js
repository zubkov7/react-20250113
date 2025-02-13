import { createAsyncThunk } from "@reduxjs/toolkit";

export const getHeadphones = createAsyncThunk(
  "headphones/getHeadphones",
  async (id, { getState, dispatch, rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/products");

    const result = await response.json();

    if (!result.length) {
      rejectWithValue("no data");
      return;
    }

    return result;
  },
  {}
);
