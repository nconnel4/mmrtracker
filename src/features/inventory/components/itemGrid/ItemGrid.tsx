import { SimpleGrid, Box } from '@chakra-ui/react';
import * as React from 'react';

import { getProgressionLevel } from '../../utils';
import { Item } from '../item';

const bowProgress = ['biggestQuiver', 'bigQuiver', 'heroBow'];
const bombProgress = ['biggerBombBag', 'bigBombBag', 'bombBag'];
const bottleProgress = ['bottle6', 'bottle5', 'bottle4', 'bottle3', 'bottle2', 'bottle1'];
const swordProgress = ['gildedSword', 'razorSword', 'kokiriSword'];
const shieldProgress = ['mirrorShield', 'hylianShield'];
const walletProgress = ['giantWallet', 'adultWallet', 'wallet'];

export const ItemGrid = () => {
  return (
    <Box>
      <SimpleGrid marginY={2} columns={6} id="items" spacingY="5px">
        <Item id="ocarina" />
        {getProgressionLevel(bowProgress)}
        <Item id="fireArrow" />
        <Item id="iceArrow" />
        <Item id="lightArrow" />
        <Item id="moonTear" />
        {getProgressionLevel(bombProgress)}
        <Item id="bombchu" />
        <Item id="dekuStick" />
        <Item id="dekuNut" />
        <Item id="magicBean" />
        <Item id="landTitleDeed" />
        <Item id="powderKeg" />
        <Item id="pictographBox" />
        <Item id="lensOfTruth" />
        <Item id="hookshot" />
        <Item id="greatFairySword" />
        <Item id="swampTitleDeed" />
        {getProgressionLevel(bottleProgress)}
        <Item id="goldDust" />
        <Item id="roomKey" />
        <Item id="kafeiLetter" />
        <Item id="pendantOfMemories" />
        <Item id="mountainTitleDeed" />
        {getProgressionLevel(swordProgress)}
        {getProgressionLevel(shieldProgress)}
        <Item id="magic" />
        {getProgressionLevel(walletProgress)}
        <Item id="letterToMama" />
        <Item id="oceanTitleDeed" />
      </SimpleGrid>
      <Box px={2}>
        <SimpleGrid marginY={2} columns={5} id="songs" spacingY="5px">
          <Item id="songOfTime" />
          <Item id="songOfHealing" />
          <Item id="eponaSong" />
          <Item id="songOfSoaring" />
          <Item id="songOfStorms" />
          <Item id="sonataOfAwakening" />
          <Item id="goronLullaby" />
          <Item id="newWaveBossaNova" />
          <Item id="elegyOfEmptiness" />
          <Item id="oathToOrder" />
        </SimpleGrid>
      </Box>
      <SimpleGrid marginY={2} columns={6} id="masks" spacingY="5px">
        <Item id="postmanHat" />
        <Item id="allNightMask" />
        <Item id="blastMask" />
        <Item id="stoneMask" />
        <Item id="greatFairyMask" />
        <Item id="dekuMask" />
        <Item id="keatonMask" />
        <Item id="bremenMask" />
        <Item id="bunnyHood" />
        <Item id="donGeroMask" />
        <Item id="maskOfScents" />
        <Item id="goronMask" />
        <Item id="romaniMask" />
        <Item id="circusLeaderMask" />
        <Item id="kafeiMask" />
        <Item id="coupleMask" />
        <Item id="maskOfTruth" />
        <Item id="zoraMask" />
        <Item id="kamaroMask" />
        <Item id="gibdoMask" />
        <Item id="garoMask" />
        <Item id="captainHat" />
        <Item id="giantMask" />
        <Item id="fierceDeityMask" />
      </SimpleGrid>
      <SimpleGrid marginY={2} columns={6} id="remains" spacingY="5px">
        <Box w={48} />
        <Item id="odolwaRemains" />
        <Item id="gohtRemains" />
        <Item id="gyorgRemains" />
        <Item id="twinmoldRemains" />
        <Box w={48} />
      </SimpleGrid>
    </Box>
  );
};
