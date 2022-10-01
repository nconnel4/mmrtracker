import type { Items, Flags } from '@/types';

export const checkFlag = {
  hasProjectile: (items: Items) => {
    return (
      (items.dekuMask.active && items.magic.active) ||
      items.heroBow.active ||
      items.hookshot.active ||
      items.zoraMask.active
    );
  },
  hasExplosives: (items: Items) => {
    return (
      items.bombBag.active ||
      items.blastMask.active ||
      (items.powderKeg.active && items.goronMask.active)
    );
  },
  hasFireArrows: (items: Items) => {
    return items.heroBow.active && items.fireArrow.active && items.magic.active;
  },
  hasIceArrows: (items: Items) => {
    return items.heroBow.active && items.iceArrow.active && items.magic.active;
  },
  hasLightArrows: (items: Items) => {
    return items.heroBow.active && items.lightArrow.active && items.magic.active;
  },
  canMeltIce: (items: Items, flags: Flags) => {
    return flags.hasFireArrows || items.bottle1.active || items.gohtRemains.active;
  },
  canBreakRocks: (items: Items, flags: Flags) => {
    return flags.hasExplosives || items.goronMask.active;
  },
  hasSwampAccess: (items: Items) => {
    return (
      items.heroBow.active ||
      items.hookshot.active ||
      items.zoraMask.active ||
      items.bottle1.active ||
      items.pictographBox.active
    );
  },
  hasDekuPalaceAccess: (items: Items, flags: Flags) => {
    return items.dekuMask.active && flags.hasSwampAccess;
  },
  hasWoodfallAccess: (items: Items, flags: Flags) => {
    return flags.hasDekuPalaceAccess && items.ocarina.active && items.sonataOfAwakening.active;
  },
  hasNorthAccess: (items: Items, flags: Flags) => {
    return flags.canBreakRocks && items.heroBow.active;
  },
  hasSnowHeadAccess: (items: Items, flags: Flags) => {
    return (
      flags.hasNorthAccess &&
      items.goronMask.active &&
      items.magic.active &&
      items.ocarina.active &&
      items.goronLullaby.active
    );
  },
  hasCoastAccess: (items: Items) => {
    return items.ocarina.active && items.eponaSong.active;
  },
  hasPirateExteriorAccess: (items: Items, flags: Flags) => {
    return items.zoraMask.active && flags.hasCoastAccess;
  },
  hasPirateSewerAccess: (items: Items, flags: Flags) => {
    return flags.hasPirateExteriorAccess && items.goronMask.active;
  },
  hasPirateInteriorAccess: (items: Items, flags: Flags) => {
    return flags.hasPirateSewerAccess || (flags.hasPirateExteriorAccess && items.hookshot.active);
  },
  hasGreatBayAccess: (items: Items, flags: Flags) => {
    return (
      flags.hasCoastAccess &&
      items.zoraMask.active &&
      items.ocarina.active &&
      items.newWaveBossaNova.active &&
      items.hookshot.active
    );
  },
  hasGraveyardAccess: (items: Items) => {
    return items.ocarina.active && items.eponaSong.active;
  },
  hasIkanaAccess: (items: Items, flags: Flags) => {
    return (
      flags.hasGraveyardAccess &&
      (items.garoMask.active || items.gibdoMask.active) &&
      items.hookshot.active
    );
  },
  hasUpperIkanaAccess: (items: Items, flags: Flags) => {
    return flags.hasIkanaAccess && flags.hasIceArrows && items.hookshot.active;
  },
  hasIkanaCastleAccess: (items: Items, flags: Flags) => {
    return flags.hasUpperIkanaAccess;
  },
  hasStoneTowerAccess: (items: Items, flags: Flags) => {
    return (
      flags.hasUpperIkanaAccess &&
      (items.dekuMask.active || items.zoraMask.active || items.goronMask.active) &&
      items.ocarina.active &&
      items.elegyOfEmptiness.active
    );
  },
  hasInvertedStoneTowerAccess: (flags: Flags) => {
    return flags.hasStoneTowerAccess && flags.hasLightArrows;
  },
  canCompleteGossipStones: (items: Items) => {
    return (
      items.ocarina.active &&
      ((items.dekuMask.active && items.sonataOfAwakening.active) ||
        (items.goronMask.active && items.goronLullaby.active) ||
        (items.zoraMask.active && items.newWaveBossaNova.active))
    );
  },
  hasMagicBeans: (items: Items) => {
    return (
      items.magicBean.active &&
      (items.bottle1.active || (items.ocarina.active && items.songOfStorms.active))
    );
  },
  hasMagicBeansOrHookshot: (items: Items, flags: Flags) => {
    return flags.hasMagicBeans || items.hookshot.active;
  },
};
