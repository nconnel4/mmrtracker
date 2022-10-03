import { Box, Flex } from '@chakra-ui/react';
import * as React from 'react';

import { CheckList } from '@/features/checks';
import { ItemGrid } from '@/features/inventory';
import { Map } from '@/features/map';
import { RegionList } from '@/features/regions';
import { useAppSelector } from '@/hooks/useAppSelector';

export const Tracker = () => {
  const activeRegion = useAppSelector((state) => state.tracker.activeRegion);

  return (
    <Flex>
      <Box flex="0 0 350px" p={3}>
        <ItemGrid />
      </Box>
      <Box h="90vh" flex={1} p={3} overflowY="scroll">
        {!activeRegion && <RegionList />}
        {activeRegion && <CheckList />}
      </Box>
      <Box flex={2}>
        <Map />
      </Box>
    </Flex>
  );
};
