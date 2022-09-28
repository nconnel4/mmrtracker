import * as React from 'react';

// import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

import { Tracker } from '@/pages';
import { AppProvider } from '@/providers/app';

export const App = () => (
  <AppProvider>
    <Tracker />
  </AppProvider>
);
