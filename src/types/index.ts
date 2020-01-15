export type KeyValue = {
  [key: string]: any;
};

export type ColumnOrder = {
  column: string;
  show: boolean;
};

export type SizeTypes = 'small' | 'medium';

export interface IOptions {
  image?: string;
  value: string;
  label: string;
}
