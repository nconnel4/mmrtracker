import { Items, Flags, Check } from '@/types';

export const checkActive = (items: Items, flags: Flags, check: Check) => {
  const checkPassed = [true];

  check.requiredFlags.forEach((flag) => {
    if (Array.isArray(flag)) {
      checkPassed.push(flag.some((requirement) => flags[requirement]));
    } else {
      checkPassed.push(flags[flag]);
    }
  });

  check.requiredItems.forEach((item) => {
    if (Array.isArray(item)) {
      checkPassed.push(item.some((requirement) => items[requirement].active));
    } else {
      checkPassed.push(items[item].active);
    }
  });

  return checkPassed.every((pass) => pass);
};
