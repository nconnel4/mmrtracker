import * as React from 'react';

import { useAppSelector } from '@/hooks/useAppSelector';
import { selectRegionList } from '@/stores/trackerSlice';

import { Region } from './Region';

export const RegionList = () => {
  const regions = useAppSelector(selectRegionList);

  return (
    <div>
      {regions.map((region) => {
        return (
          <div key={region}>
            <Region id={region} />
            <br />
          </div>
        );
      })}
    </div>
  );
};
