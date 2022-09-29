export type Check = {
  name: string;
  active: boolean;
  complete: boolean;
  requiredFlags: Array<string | string[]>;
  requiredItems: Array<string | string[]>;
};

export type Checks = {
  [key: string]: Check;
};
