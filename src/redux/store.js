import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filters/filters.reducer';
import { carsReducer } from './cars/cars.reducer';
import { modalReducer } from './modal/modal.reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const favoritesConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
  //blacklist:['filter']
};

export const store = configureStore({
  reducer: {
    filtersStore: filtersReducer,
    carsStore: persistReducer(favoritesConfig, carsReducer),
    modalStore: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
