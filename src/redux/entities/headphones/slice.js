import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getHeadphones } from "./get-headphones";
import {
  REQUEST_STATUS_FULFILLED,
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../../constants";

const entityAdapter = createEntityAdapter();

export const headphonesSlice = createSlice({
  name: "headphones",
  initialState: entityAdapter.getInitialState({
    getHeadphonesRequestStatus: "idle",
  }),
  selectors: {
    selectGetHeadphonesRequestStatus: (state) =>
      state.getHeadphonesRequestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getHeadphones.pending, (state) => {
        state.getHeadphonesRequestStatus = REQUEST_STATUS_PENDING;
      })
      .addCase(getHeadphones.rejected, (state) => {
        state.getHeadphonesRequestStatus = REQUEST_STATUS_REJECTED;
      })
      .addCase(getHeadphones.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.getHeadphonesRequestStatus = REQUEST_STATUS_FULFILLED;
      }),
});

const selectHeadphonesSlice = (state) => state.headphones;

export const {
  selectById: selectHeadphoneById,
  selectIds: selectHeadphonesIds,
} = entityAdapter.getSelectors(selectHeadphonesSlice);

export const { selectGetHeadphonesRequestStatus } = headphonesSlice.selectors;
