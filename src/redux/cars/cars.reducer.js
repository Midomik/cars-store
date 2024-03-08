import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { brands, rentalPrices } from '../../data/filters';
import axios from 'axios';
// import {
//   getCategories,
//   getIngredients,
//   getGlasses,
// } from '..//filters/filters.operations';

axios.defaults.baseURL = 'https://65e86dfe4bb72f0a9c4f4ec6.mockapi.io/';

const initialState = { cars: { items: [], isLoading: false, error: null } };

export const getCars = createAsyncThunk('cars/get', async (_, thunkApi) => {
  try {
    const { data } = await axios.get('cars');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

const CarsSlice = createSlice({
  name: 'cars',
  initialState,
  //   reducers: {
  //     setInitialState: (state, { payload }) => {
  //       state.page = payload;
  //     },
  //   },
  extraReducers: builder => {
    builder
      .addCase(getCars.fulfilled, (state, { payload }) => {
        state.cars.isLoading = false;
        state.cars.items = payload;
      })
      .addMatcher(isAnyOf(getCars.pending), state => {
        state.cars.isLoading = true;
        state.cars.error = null;
      })
      .addMatcher(isAnyOf(getCars.rejected), (state, { payload }) => {
        state.cars.isLoading = false;
        state.cars.error = payload;
      });
  },
});

export const carsReducer = CarsSlice.reducer;
// export const { setPage } = filtersSlice.actions;
