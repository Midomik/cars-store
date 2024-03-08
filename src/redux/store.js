import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters/filters.reducer";

export const store = configureStore({
  reducer: {
    filtersStore: filtersReducer,
  },
});
