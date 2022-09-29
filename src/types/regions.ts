export type Region = {
  name: string;
  checks: string[];
};

export type Regions = {
  [key: string]: Region;
};
