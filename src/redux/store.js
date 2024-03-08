import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filters/filters.reducer';
import { carsReducer } from './cars/cars.reducer';

export const store = configureStore({
  reducer: {
    filtersStore: filtersReducer,
    carsStore: carsReducer,
  },
});
