import { Box, Text, Image, Tooltip } from '@chakra-ui/react';
import * as React from 'react';

/*eslint import/namespace: ['error', { allowComputed: true }]*/
import * as icons from '@/assets/icons';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { toggleItem, upgradeItem } from '@/stores/trackerSlice';
import { Item as ItemType } from '@/types';

export type ItemProps = {
  id: string;
};

export const Item = ({ id }: ItemProps) => {
  const item: ItemType = useAppSelector((state) => state.tracker.items[id]);
  const dispatch = useAppDispatch();

  const imageId = item.image as keyof typeof icons;

  const handleClick: React.MouseEventHandler = () => {
    if ('nextLevel' in item && item.active) {
      dispatch(upgradeItem(id));
    } else if (!('previousLevel' in item)) {
      dispatch(toggleItem(id));
    }
  };

  const handleContextMenu: React.MouseEventHandler = (event) => {
    event.preventDefault();
    dispatch(toggleItem(id));
  };

  return (
    <Box
      key={id}
      as="button"
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      h="48px"
      w="48px"
      position="relative"
      border="black"
      borderStyle="solid"
      opacity={item.active ? 1 : 0.2}
    >
      <Tooltip label={item.name} openDelay={500} hasArrow bg="purple.600">
        <Image
          src={icons[imageId]}
          alt={item.name}
          objectFit="contain"
          position="absolute"
          h="100%"
          w="100%"
          top="0"
          left="0"
        />
      </Tooltip>
      <Text
        as="b"
        fontSize={item.type === 'song' ? 'xs' : 'lg'}
        position="absolute"
        color="lightGreen"
        bottom="0"
        right="0"
      >
        {item.label}
      </Text>
    </Box>
  );
};
