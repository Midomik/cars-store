import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://65e86dfe4bb72f0a9c4f4ec6.mockapi.io/';

const initialState = {
  cars: {
    totalItems: [],
    items: [],
    isLoading: false,
    error: null,
  },
  favorites: [],
};

export const getCars = createAsyncThunk('cars/get', async (res, thunkApi) => {
  try {
    const { data } = await axios.get(
      'cars',
      res.page
        ? {
            params: { page: res.page, limit: res.limit },
          }
        : {}
    );
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const getAllCars = createAsyncThunk(
  'cars/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('cars');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loadMore = createAsyncThunk(
  'cars/loadMore',
  async (res, thunkApi) => {
    try {
      const { data } = await axios.get(
        'cars',
        res.page
          ? {
              params: { page: res.page, limit: res.limit },
            }
          : {}
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const CarsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addToFavorites: (state, { payload }) => {
      state.favorites.push(payload);
    },
    removeFromFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter(id => id !== payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCars.fulfilled, (state, { payload }) => {
        state.cars.isLoading = false;
        state.cars.items = [...payload];
      })
      .addCase(getAllCars.fulfilled, (state, { payload }) => {
        state.cars.isLoading = false;
        state.cars.totalItems = payload;
      })
      .addCase(loadMore.fulfilled, (state, { payload }) => {
        state.cars.isLoading = false;
        state.cars.items = [...state.cars.items, ...payload];
      })
      .addMatcher(
        isAnyOf(getCars.pending, getAllCars.pending, loadMore.pending),
        state => {
          state.cars.isLoading = true;
          state.cars.error = null;
        }
      )
      .addMatcher(
        isAnyOf(getCars.rejected, getAllCars.rejected, loadMore.rejected),
        (state, { payload }) => {
          state.cars.isLoading = false;
          state.cars.error = payload;
        }
      );
  },
});

export const carsReducer = CarsSlice.reducer;
export const { addToFavorites, removeFromFavorites } = CarsSlice.actions;
