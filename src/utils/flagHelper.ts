import type { Items } from '@/types';

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
  canMeltIce: (items: Items) => {
    return items.hasFireArrows.active || items.bottle1.active || items.gohtRemains.active;
  },
  canBreakRocks: (items: Items) => {
    return items.hasExplosives.active || items.goronMask.active;
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
  hasDekuPalaceAccess: (items: Items) => {
    return items.dekuMask.active && items.hasSwampAccess.active;
  },
  hasWoodfallAccess: (items: Items) => {
    return (
      items.hasDekuPalaceAccess.active && items.ocarina.active && items.sonataOfAwakening.active
    );
  },
  hasNorthAccess: (items: Items) => {
    return items.canBreakRocks.active && items.heroBow.active;
  },
  hasSnowheadAccess: (items: Items) => {
    return (
      items.hasNorthAccess.active &&
      items.goronMask.active &&
      items.magic.active &&
      items.ocarina.active &&
      items.goronLullaby.active
    );
  },
  hasCoastAccess: (items: Items) => {
    return items.ocarina.active && items.eponaSong.active;
  },
  hasPirateExteriorAccess: (items: Items) => {
    return items.zoraMask.active && items.hasCoastAccess.active;
  },
  hasPirateSewerAccess: (items: Items) => {
    return items.hasPirateExteriorAccess.active && items.goronMask.active;
  },
  hasPirateInteriorAccess: (items: Items) => {
    return (
      items.hasPirateSewerAccess.active ||
      (items.hasPirateExteriorAccess.active && items.hookshot.active)
    );
  },
  hasGreatBayAccess: (items: Items) => {
    return (
      items.hasCoastAccess.active &&
      items.zoraMask.active &&
      items.ocarina.active &&
      items.newWaveBossaNova.active &&
      items.hookshot.active
    );
  },
  hasGraveyardAccess: (items: Items) => {
    return items.ocarina.active && items.eponaSong.active;
  },
  hasIkanaAccess: (items: Items) => {
    return (
      items.hasGraveyardAccess.active &&
      (items.garoMask.active || items.gibdoMask.active) &&
      items.hookshot.active
    );
  },
  hasUpperIkanaAccess: (items: Items) => {
    return items.hasIkanaAccess.active && items.hasIceArrows.active && items.hookshot.active;
  },
  hasIkanaCastleAccess: (items: Items) => {
    return (
      items.hasUpperIkanaAccess.active && (items.hasLightArrows.active || items.mirrorShield.active)
    );
  },
  hasStoneTowerAccess: (items: Items) => {
    return (
      items.hasUpperIkanaAccess.active &&
      (items.dekuMask.active || items.zoraMask.active || items.goronMask.active) &&
      items.ocarina.active &&
      items.elegyOfEmptiness.active
    );
  },
  hasInvertedStoneTowerAccess: (items: Items) => {
    return items.hasStoneTowerAccess.active && items.hasLightArrows.active;
  },
};
