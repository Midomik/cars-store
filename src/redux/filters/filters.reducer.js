import { createSlice } from '@reduxjs/toolkit';
import { brands, rentalPrices } from '../../data/filters';

const initialState = {
  brands,
  rentalPrices,
  filteredCars: null,
  isLoading: false,
  error: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setInitialState: (state, { payload }) => {
      state.page = payload;
    },
    filterCars: (state, { payload }) => {
      const { cars, filterInfo } = payload;
      const { barnd, rentalPrice, mileageFrom, mileageTo } = filterInfo;
      const filteredCars = cars.filter(car => {
        if (barnd && car.make !== barnd) {
          return false;
        }

        if (
          Number(rentalPrice) &&
          Number(car.rentalPrice.slice(1)) > Number(rentalPrice)
        ) {
          return false;
        }

        if (Number(mileageFrom) && Number(car.mileage) < Number(mileageFrom)) {
          return false;
        }
        if (Number(mileageTo) && Number(car.mileage) > Number(mileageTo)) {
          return false;
        }

        return true;
      });

      state.filteredCars = filteredCars;
      if (
        barnd === '' &&
        rentalPrice === '' &&
        mileageFrom === '' &&
        mileageTo === ''
      ) {
        state.filteredCars = null;
      }
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setInitialState, filterCars } = filtersSlice.actions;
