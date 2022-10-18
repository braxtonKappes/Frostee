import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { frostyApi } from './api/frostyApi';


export const store = configureStore({
  reducer: {
    [frostyApi.reducerPath]: frostyApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(frostyApi.middleware),
});


setupListeners(store.dispatch);



