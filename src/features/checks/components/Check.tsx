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
  // let parentCheck = check;
  // if (check.linkId) {
  const parentCheck = useAppSelector((state) => state.tracker.checks[check.linkId as string]);
  // }
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleCheckComplete(check.linkId ? check.linkId : id));
  };

  const getColor = () => {
    try {
      if (parentCheck ? parentCheck.complete : check.complete) {
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
      {parentCheck ? parentCheck.name : check.name}
    </TrackerButton>
  );
};
