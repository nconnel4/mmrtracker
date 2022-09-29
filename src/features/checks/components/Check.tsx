import * as React from 'react';

import { TrackerButton } from '@/components';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { toggleCheckComplete } from '@/stores/trackerSlice';

type CheckProps = {
  id: string;
};

export const Check = ({ id }: CheckProps) => {
  const check = useAppSelector((state) => state.tracker.checks[id]);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleCheckComplete(id));
  };

  const getColor = () => {
    try {
      if (check.complete) {
        return 'gray';
      } else if (check.active) {
        return 'green';
      }
    } catch {
      console.log(id);
    }
    return 'red';
  };

  return (
    <TrackerButton color={getColor()} handleClick={handleClick}>
      {check.name}
    </TrackerButton>
  );
};
