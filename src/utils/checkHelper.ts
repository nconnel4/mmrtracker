import { Items, Check } from '@/types';

export const checkActive = (items: Items, check: Check) => {
  const hasRequiredItems = check.requiredItems.every((item) => {
    try {
      return items[item].active;
    } catch {
      console.log(item);
    }
  });
  const hasConditionalItems =
    check.conditionalItems.length == 0 ||
    check.conditionalItems.some((conditionalItems) =>
      conditionalItems.every((item) => {
        try {
          return items[item].active;
        } catch {
          console.log(item);
        }
      })
    );
  console.log(hasRequiredItems);
  console.log(hasConditionalItems);

  return hasRequiredItems && hasConditionalItems;
};
