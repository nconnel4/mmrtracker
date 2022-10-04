import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import checkData from '@/data/checks.json';
import itemData from '@/data/items.json';
import regionData from '@/data/regions.json';
import type { Items, Regions, Checks } from '@/types';
import { checkFlag } from '@/utils';

import type { AppStartListening } from './listenerMiddleware';
import { RootState } from './store';

interface TrackerState {
  items: Items;
  regions: Regions;
  checks: Checks;
  activeRegion: string;
}

const initialState: TrackerState = {
  items: itemData,
  regions: regionData,
  checks: checkData,
  activeRegion: '',
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
    updateFlags: (state) => {
      state.items.hasProjectile.active = checkFlag.hasProjectile(state.items);
      state.items.hasExplosives.active = checkFlag.hasExplosives(state.items);
      state.items.hasFireArrows.active = checkFlag.hasFireArrows(state.items);
      state.items.hasIceArrows.active = checkFlag.hasIceArrows(state.items);
      state.items.hasLightArrows.active = checkFlag.hasLightArrows(state.items);
      state.items.canMeltIce.active = checkFlag.canMeltIce(state.items);
      state.items.canBreakRocks.active = checkFlag.canBreakRocks(state.items);
      state.items.hasSwampAccess.active = checkFlag.hasSwampAccess(state.items);
      state.items.hasDekuPalaceAccess.active = checkFlag.hasDekuPalaceAccess(state.items);
      state.items.hasWoodfallAccess.active = checkFlag.hasWoodfallAccess(state.items);
      state.items.hasNorthAccess.active = checkFlag.hasNorthAccess(state.items);
      state.items.hasSnowheadAccess.active = checkFlag.hasSnowheadAccess(state.items);
      state.items.hasCoastAccess.active = checkFlag.hasCoastAccess(state.items);
      state.items.hasPirateExteriorAccess.active = checkFlag.hasPirateExteriorAccess(state.items);
      state.items.hasPirateSewerAccess.active = checkFlag.hasPirateSewerAccess(state.items);
      state.items.hasPirateInteriorAccess.active = checkFlag.hasPirateInteriorAccess(state.items);
      state.items.hasGreatBayAccess.active = checkFlag.hasGreatBayAccess(state.items);
      state.items.hasGraveyardAccess.active = checkFlag.hasGraveyardAccess(state.items);
      state.items.hasIkanaAccess.active = checkFlag.hasIkanaAccess(state.items);
      state.items.hasUpperIkanaAccess.active = checkFlag.hasUpperIkanaAccess(state.items);
      state.items.hasIkanaCastleAccess.active = checkFlag.hasIkanaCastleAccess(state.items);
      state.items.hasStoneTowerAccess.active = checkFlag.hasStoneTowerAccess(state.items);
      state.items.hasInvertedStoneTowerAccess.active = checkFlag.hasInvertedStoneTowerAccess(
        state.items
      );
    },
    toggleCheckActive: (state, action: PayloadAction<string>) => {
      state.checks[action.payload].active = !state.checks[action.payload].active;
    },
    toggleCheckComplete: (state, action: PayloadAction<string>) => {
      state.checks[action.payload].complete = !state.checks[action.payload].complete;
    },
    setActiveRegion: (state, action: PayloadAction<string>) => {
      state.activeRegion = action.payload;
    },
  },
});

export const {
  toggleItem,
  upgradeItem,
  updateFlags,
  toggleCheckActive,
  toggleCheckComplete,
  setActiveRegion,
} = trackerSlice.actions;

export const selectTracker = (state: RootState) => state.tracker;
export const selectActiveRegion = (state: RootState) =>
  state.tracker.regions[state.tracker.activeRegion];
export const selectRegionList = (state: RootState) => Object.keys(state.tracker.regions);

export default trackerSlice.reducer;

export const addToggleItemListener = (startListening: AppStartListening) => {
  startListening({
    matcher: isAnyOf(toggleItem, upgradeItem),
    effect: (action, listenerAPI) => {
      console.log(action);
      listenerAPI.dispatch(updateFlags());
    },
  });
};
