import { ChakraProvider, theme } from '@chakra-ui/react';
import * as React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '@/stores';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </ReduxProvider>
  );
};
