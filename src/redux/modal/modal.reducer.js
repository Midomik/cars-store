import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65e86dfe4bb72f0a9c4f4ec6.mockapi.io/';

const initialState = {
  isOpenModal: false,
  modalData: null,
  error: null,
  isLoading: false,
};

export const getCarById = createAsyncThunk(
  'cars/getById',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.get(`/cars/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setOpenModal: (state, { payload }) => {
      state.isOpenModal = true;
    },
    setCloseModal: (state, { payload }) => {
      state.isOpenModal = false;
      state.modalData = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCarById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.modalData = payload;
      })

      .addMatcher(isAnyOf(getCarById.pending), state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(getCarById.rejected), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const modalReducer = modalSlice.reducer;
export const { setOpenModal, setCloseModal } = modalSlice.actions;
