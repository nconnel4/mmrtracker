import * as React from 'react';

import { TrackerButton } from '@/components';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { setActiveRegion } from '@/stores/trackerSlice';

type RegionProps = {
  id: string;
};

export const Region = ({ id }: RegionProps) => {
  const region = useAppSelector((state) => state.tracker.regions[id]);
  const dispatch = useAppDispatch();

  const getColor = () => {
    const checkStatus = region.checks.map((check) =>
      useAppSelector((state) => state.tracker.checks[check])
    );

    if (checkStatus.every((check) => check.complete)) {
      return 'gray';
    } else if (checkStatus.every((check) => check.active)) {
      return 'green';
    } else if (checkStatus.some((check) => check.active)) {
      return 'goldenRod';
    }

    return 'red';
  };

  const handleClick = () => {
    dispatch(setActiveRegion(id));
  };

  return (
    <TrackerButton color={getColor()} handleClick={handleClick}>
      {region.name}
    </TrackerButton>
  );
};
