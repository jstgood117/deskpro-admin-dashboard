export const processSortParam = (a:any) => {
  a = typeof a === 'string' ? a.toLowerCase() : a;

  if (
    a !== null &&
    typeof a === 'object' &&
    typeof a.props === 'object' &&
    a.props.hasOwnProperty('sortingvalue')
  ) {
    a = !isNaN(parseFloat(a.props.sortingvalue))
      ? parseFloat(a.props.sortingvalue)
      : typeof a.props.sortingvalue === 'string'
      ? a.props.sortingvalue.toLowerCase()
      : 0;
  }

  a = a === null || a === undefined ? '-' : a;

  return a;
};

export const customSortMethod = (a:any, b:any, col:string): number => {

  // force any string values to lowercase
  a = processSortParam(a.values[col]);
  b = processSortParam(b.values[col]);

  // Deal with the dashes. These
  // should always be at the end
  // of the table
  if (a === '-') {
    return 1;
  }

  if (b === '-') {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  if (a <= b) {
    return -1;
  }

  return 0;
};
