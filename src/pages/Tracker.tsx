import { Box } from '@chakra-ui/react';
import * as React from 'react';

import { ItemGrid } from '@/features/inventory';

export const Tracker = () => {
  return (
    <Box>
      <Box w="400px" p={3}>
        <ItemGrid />
      </Box>
    </Box>
  );
};
