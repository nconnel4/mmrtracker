import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import itemData from '@/data/items.json';
import type { Items } from '@/types';
interface TrackerState {
  items: Items;
}

const initialState: TrackerState = {
  items: itemData,
};

export const trackerSlice = createSlice({
  name: 'tracker',
  initialState,
  reducers: {
    toggleItem: (state, action: PayloadAction<string>) => {
      state.items[action.payload].active = !state.items[action.payload].active;
    },
    upgradeItem: (state, action: PayloadAction<string>) => {
      const upgradeItem = state.items[action.payload].nextLevel;
      if (upgradeItem) {
        state.items[upgradeItem].active = true;
      }
    },
  },
});

export const { toggleItem, upgradeItem } = trackerSlice.actions;
export default trackerSlice.reducer;
