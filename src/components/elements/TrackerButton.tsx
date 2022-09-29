import { Box, Text } from '@chakra-ui/react';
import * as React from 'react';

type TrackerButtonProps = {
  color: string;
  handleClick: React.MouseEventHandler;
  children: React.ReactNode;
};

export const TrackerButton = ({ color, handleClick, children }: TrackerButtonProps) => {
  return (
    <Box
      as="button"
      onClick={handleClick}
      p={2}
      outline="solid"
      outlineColor={color}
      outlineOffset={-6}
      borderBottom={1}
      borderStyle="solid"
      textAlign="left"
      w="100%"
    >
      <Text color={color}>{children}</Text>
    </Box>
  );
};
