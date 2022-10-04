export type Check = {
  name: string;
  active: boolean;
  complete: boolean;
  requiredItems: string[];
  conditionalItems: string[][];
  linkId?: string;
};

export type Checks = {
  [key: string]: Check;
};
