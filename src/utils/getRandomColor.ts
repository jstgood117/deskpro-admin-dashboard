import { tableColors } from '../resources/constants/mock/testTableData';
import { ITableColor } from '../resources/interfaces';

export const getRandomItem = (): ITableColor => {
  return tableColors[Math.floor(Math.random() * tableColors.length)];
};

export const getColorByIndex = (index: number): ITableColor => {
  return tableColors[Math.floor(index % tableColors.length)];
};