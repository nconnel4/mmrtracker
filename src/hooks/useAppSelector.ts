import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { RootState } from '@/stores';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
