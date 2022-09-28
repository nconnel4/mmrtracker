import { configureStore } from '@reduxjs/toolkit';

import trackerSlice from './trackerSlice';

export const store = configureStore({
  reducer: {
    tracker: trackerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
