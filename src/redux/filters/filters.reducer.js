import { createSlice } from "@reduxjs/toolkit";
import { brands, rentalPrices } from "../../data/filters";
// import {
//   getCategories,
//   getIngredients,
//   getGlasses,
// } from '..//filters/filters.operations';

const initialState = {
  brands,
  rentalPrices,
  isLoading: false,
  error: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setInitialState: (state, { payload }) => {
      state.page = payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setPage } = filtersSlice.actions;
