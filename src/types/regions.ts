export type Region = {
  name: string;
  checks: string[];
  coordinates?: number[];
};

export type Regions = {
  [key: string]: Region;
};
