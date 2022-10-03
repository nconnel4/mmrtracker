import { Box, Image } from '@chakra-ui/react';
import * as React from 'react';

import { useAppSelector } from '@/hooks/useAppSelector';
import { selectRegionList } from '@/stores/trackerSlice';

import map from '../assets/map.jpg';

import { MapMarker } from './MapMarker';

export const Map = () => {
  const regions = useAppSelector(selectRegionList);

  return (
    <Box position="relative" w="600px" h="600px">
      <Image position="absolute" src={map} w="100%" h="100%" />
      {regions.map((region) => (
        <MapMarker regionId={region} key={region} />
      ))}
    </Box>
  );
};
