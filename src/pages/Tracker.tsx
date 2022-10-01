import { Box } from '@chakra-ui/react';
import * as React from 'react';

import { CheckList } from '@/features/checks';
import { ItemGrid } from '@/features/inventory';
import { Map } from '@/features/map';
import { RegionList } from '@/features/regions';
import { useAppSelector } from '@/hooks/useAppSelector';

export const Tracker = () => {
  const activeRegion = useAppSelector((state) => state.tracker.activeRegion);

  return (
    <Box display="flex">
      <Box w="400px" p={3}>
        <ItemGrid />
      </Box>
      <Box w="600px" p={3}>
        {!activeRegion && <RegionList />}
        {activeRegion && <CheckList />}
      </Box>
      <Box>
        <Map />
      </Box>
    </Box>
  );
};
