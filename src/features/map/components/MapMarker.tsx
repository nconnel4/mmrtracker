import { Square } from '@chakra-ui/react';
import * as React from 'react';

import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { setActiveRegion } from '@/stores/trackerSlice';

type MapMarkerProps = {
  regionId: string;
};

export const MapMarker = ({ regionId }: MapMarkerProps) => {
  const region = useAppSelector((state) => state.tracker.regions[regionId]);
  const checks = region.checks.map((checkId: string) =>
    useAppSelector((state) => {
      const check = state.tracker.checks[checkId];
      if (check.linkId) {
        const parentCheck = state.tracker.checks[check.linkId];
        return {
          ...check,
          complete: parentCheck.complete,
        };
      } else {
        return check;
      }
    })
  );

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setActiveRegion(regionId));
  };

  const getActiveChecks = () => {
    return checks.filter((check) => {
      try {
        return check.active && !check.complete;
      } catch {
        console.log(check);
      }
    }).length;
  };
  const getCompleteChecks = () => {
    return checks.filter((check) => check.complete).length;
  };

  const getBgColor = () => {
    const count = getActiveChecks();
    const completeCount = getCompleteChecks();

    if (completeCount == region.checks.length) {
      return 'gray';
    } else if (count == 0) {
      return 'red';
    } else if (count + completeCount < region.checks.length) {
      return 'goldenrod';
    }

    return 'green';
  };

  return (
    <Square
      as="button"
      size={5}
      rounded={3}
      color="white"
      position="absolute"
      left={region.coordinates ? `${region.coordinates[0]}%` : '0%'}
      top={region.coordinates ? `${region.coordinates[1]}%` : '0%'}
      onClick={handleClick}
      bgColor={getBgColor()}
      border={1}
      borderColor="white"
      borderStyle="solid"
      fontWeight="bold"
    >
      {getActiveChecks() > 0 && getActiveChecks()}
    </Square>
  );
};
