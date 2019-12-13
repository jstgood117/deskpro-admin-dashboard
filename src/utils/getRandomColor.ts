import { ITableColor } from '../resources/interfaces';

const tableColors: ITableColor[] = [
  { background: '#E1EEFB', textColor: '#3A8DDE' },
  { background: '#F9E6E1', textColor: '#EC6C4E' },
  { background: '#FFF8E1', textColor: '#F8AF3C' },
  { background: '#EBE4F2', textColor: '#9384BD' },
  { background: '#F7F7F7', textColor: '#8B9293' },
  { background: '#FAE8F0', textColor: '#DF5E9C' },
  { background: '#DAEEED', textColor: '#54B162' }
];

export const getRandomItem = (): ITableColor => {
  return tableColors[Math.floor(Math.random() * tableColors.length)];
};

export const getColorByIndex = (index: number): ITableColor => {
  return tableColors[Math.floor(index % tableColors.length)];
};
export const getColorByChar = (char: string): ITableColor => {
  const strChar = char.toUpperCase();
  switch (strChar) {
    case 'A':
    case 'H':
    case 'O':
    case 'V':
      return tableColors[0];
    case 'B':
    case 'I':
    case 'P':
    case 'W':
      return tableColors[1];
    case 'C':
    case 'J':
    case 'Q':
    case 'X':
      return tableColors[2];
    case 'D':
    case 'K':
    case 'R':
    case 'Y':
      return tableColors[3];
    case 'E':
    case 'L':
    case 'S':
    case 'Z':
      return tableColors[4];
    case 'F':
    case 'M':
    case 'T':
      return tableColors[5];
    case 'G':
    case 'N':
    case 'U':
      return tableColors[6];
    default:
      return tableColors[6];
  }
};
