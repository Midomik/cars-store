import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://65e86dfe4bb72f0a9c4f4ec6.mockapi.io/';

const initialState = {
  cars: { totalItems: 0, items: [], isLoading: false, error: null },
};

export const getCars = createAsyncThunk(
  'cars/get',
  async ({ page, limit }, thunkApi) => {
    try {
      const { data } = await axios.get('cars', {
        params: { page, limit },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
// export const gaga = createAsyncThunk('cars/gagag',async(_))
export const getAllCars = createAsyncThunk(
  'cars/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('cars');
      return data.length;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

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
        state.cars.items = [...state.cars.items, ...payload];
      })
      .addCase(getAllCars.fulfilled, (state, { payload }) => {
        state.cars.isLoading = false;
        state.cars.totalItems = payload;
      })
      .addMatcher(isAnyOf(getCars.pending, getAllCars.pending), state => {
        state.cars.isLoading = true;
        state.cars.error = null;
      })
      .addMatcher(
        isAnyOf(getCars.rejected, getAllCars.rejected),
        (state, { payload }) => {
          state.cars.isLoading = false;
          state.cars.error = payload;
        }
      );
  },
});

export const carsReducer = CarsSlice.reducer;
// export const { setPage } = filtersSlice.actions;
