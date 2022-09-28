import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import type { TypedStartListening } from '@reduxjs/toolkit';

import type { RootState, AppDispatch } from './store';
import { toggleItem, upgradeItem, updateFlags } from './trackerSlice';

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(toggleItem, upgradeItem),
  effect: (action, listenerApi) => {
    listenerApi.dispatch(updateFlags());
  },
});
