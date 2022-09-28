import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import itemData from '@/data/items.json';
import type { Items, Flags } from '@/types';
import { checkFlag } from '@/utils';

import type { AppStartListening } from './listenerMiddleware';
interface TrackerState {
  items: Items;
  flags: Flags;
}

const initialState: TrackerState = {
  items: itemData,
  flags: {
    hasProjectile: false,
    hasExplosives: false,
    hasFireArrows: false,
    hasIceArrows: false,
    hasLightArrows: false,
    canMeltIce: false,
    canBreakRocks: false,
    hasSwampAccess: false,
    hasDekuPalaceAccess: false,
    hasWoodfallAccess: false,
    hasNorthAccess: false,
    hasSnowHeadAccess: false,
    hasCoastAccess: false,
    hasPirateExteriorAccess: false,
    hasPirateSewerAccess: false,
    hasPirateInteriorAccess: false,
    hasGreatBayAccess: false,
    hasGraveyardAccess: false,
    hasIkanaAccess: false,
    hasUpperIkanaAccess: false,
    hasIkanaCastleAccess: false,
    hasStoneTowerAccess: false,
    hasInvertedStoneTowerAccess: false,
  },
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
      state.flags.hasProjectile = checkFlag.hasProjectile(state.items);
      state.flags.hasExplosives = checkFlag.hasExplosives(state.items);
      state.flags.hasFireArrows = checkFlag.hasFireArrows(state.items);
      state.flags.hasIceArrows = checkFlag.hasIceArrows(state.items);
      state.flags.hasLightArrows = checkFlag.hasLightArrows(state.items);
      state.flags.canMeltIce = checkFlag.canMeltIce(state.items, state.flags);
      state.flags.canBreakRocks = checkFlag.canBreakRocks(state.items, state.flags);
      state.flags.hasSwampAccess = checkFlag.hasSwampAccess(state.items);
      state.flags.hasDekuPalaceAccess = checkFlag.hasDekuPalaceAccess(state.items, state.flags);
      state.flags.hasWoodfallAccess = checkFlag.hasWoodfallAccess(state.items, state.flags);
      state.flags.hasNorthAccess = checkFlag.hasNorthAccess(state.items, state.flags);
      state.flags.hasSnowHeadAccess = checkFlag.hasSnowHeadAccess(state.items, state.flags);
      state.flags.hasCoastAccess = checkFlag.hasCoastAccess(state.items);
      state.flags.hasPirateExteriorAccess = checkFlag.hasPirateExteriorAccess(
        state.items,
        state.flags
      );
      state.flags.hasPirateSewerAccess = checkFlag.hasPirateSewerAccess(state.items, state.flags);
      state.flags.hasPirateInteriorAccess = checkFlag.hasPirateInteriorAccess(
        state.items,
        state.flags
      );
      state.flags.hasGreatBayAccess = checkFlag.hasGreatBayAccess(state.items, state.flags);
      state.flags.hasGraveyardAccess = checkFlag.hasGraveyardAccess(state.items);
      state.flags.hasIkanaAccess = checkFlag.hasIkanaAccess(state.items, state.flags);
      state.flags.hasUpperIkanaAccess = checkFlag.hasUpperIkanaAccess(state.items, state.flags);
      state.flags.hasIkanaCastleAccess = checkFlag.hasIkanaCastleAccess(state.items, state.flags);
      state.flags.hasStoneTowerAccess = checkFlag.hasStoneTowerAccess(state.items, state.flags);
      state.flags.hasInvertedStoneTowerAccess = checkFlag.hasInvertedStoneTowerAccess(state.flags);
    },
  },
});

export const { toggleItem, upgradeItem, updateFlags } = trackerSlice.actions;
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
