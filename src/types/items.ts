export type Item = {
  name?: string;
  image?: string;
  type: string;
  active: boolean;
  label?: string;
  nextLevel?: string;
  previousLevel?: string;
};

export type Items = {
  [key: string]: Item;
};
