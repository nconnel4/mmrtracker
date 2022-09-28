import { configureStore } from '@reduxjs/toolkit';

import { listenerMiddleware } from './listenerMiddleware';
import trackerSlice from './trackerSlice';

export const store = configureStore({
  reducer: {
    tracker: trackerSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
