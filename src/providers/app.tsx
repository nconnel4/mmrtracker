import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

type AppProviderProps = {
    children: React.ReactNode;
}

export const AppProvider = ({children}: AppProviderProps) => {
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    )
}