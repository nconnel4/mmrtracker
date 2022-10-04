import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import type { TypedStartListening } from '@reduxjs/toolkit';

import { checkActive } from '@/utils';

import type { RootState, AppDispatch } from './store';
import {
  toggleItem,
  upgradeItem,
  updateFlags,
  toggleCheckActive,
  selectTracker,
} from './trackerSlice';

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

export const listenerMiddleware = createListenerMiddleware();
export const startAppListener = listenerMiddleware.startListening as AppStartListening;

startAppListener({
  matcher: isAnyOf(toggleItem, upgradeItem),
  effect: async (action, listenerApi) => {
    listenerApi.dispatch(updateFlags());
  },
});

startAppListener({
  actionCreator: updateFlags,
  effect: (action, listenerApi) => {
    const tracker = selectTracker(listenerApi.getState());

    Object.keys(tracker.checks).forEach((key) => {
      const check = tracker.checks[key];
      const active = checkActive(tracker.items, check);

      if (check.active != active) {
        listenerApi.dispatch(toggleCheckActive(key));
      }
    });
  },
});
