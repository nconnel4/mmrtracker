import * as React from 'react';

import { useAppSelector } from '@/hooks/useAppSelector';

import { Item } from '../components/item';

export const getProgressionLevel = (items: string[]) => {
  let activeItem = '';

  items.forEach((itemName) => {
    const item = useAppSelector((state) => state.tracker.items[itemName]);

    if (item.active && !activeItem) {
      activeItem = itemName;
    }
  });

  return <Item id={activeItem ? activeItem : items[items.length - 1]} />;
};
