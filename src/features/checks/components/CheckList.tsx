import * as React from 'react';

import { TrackerButton } from '@/components';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectActiveRegion, setActiveRegion } from '@/stores/trackerSlice';

import { Check } from './Check';

export const CheckList = () => {
  const region = useAppSelector(selectActiveRegion);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setActiveRegion(''));
  };

  return (
    <div>
      <TrackerButton color="whiteAlpha.800" handleClick={handleClick}>
        {region.name}
      </TrackerButton>
      {region.checks.map((check: string) => {
        return (
          <div key={check}>
            <Check id={check} />
            <br />
          </div>
        );
      })}
    </div>
  );
};
