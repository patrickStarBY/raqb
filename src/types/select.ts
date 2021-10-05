export type SelectItem = {
  value: string;
  title: string;
  disabled?: boolean;
};

export type SelectItems = SelectItem[] | string[];
