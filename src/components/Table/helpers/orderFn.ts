export const orderByFn = (
  data: any[],
  sortFunction: ((a: any, b: any, col?: string) => number)[],
  isDesc: boolean[]
) => {

  // If some of the rows are grouped
  // fallback to original data
  if(data.some(_row => _row.isGrouped)) {
    return data;
  }

  // get top level rows
  const topLevel = data.filter(_row => _row.isGrouped || !_row.original.parent);

  // ... get all children
  const children = data.filter(_row => !_row.isGrouped && _row.original.parent);

  // clone data
  const sortedData = [...topLevel];

  // Sort top level data
  sortedData.sort(sortFunction[0]);

  // reverse the data if descending
  if(isDesc[0]) {
    sortedData.reverse();
  }

  const result: any[] = [];

  // loop through the sorted data
  sortedData.forEach(_row => {

    // add to results
    result.push(_row);

    // if this top level row has subRows...
    if(_row.subRows && _row.subRows.length > 0) {

      // Sort the subRows
      _row.subRows.sort(sortFunction[0]);

      // Reverse them if descending
      if(isDesc[0]) {
        _row.subRows.reverse();
      }

      // then find the matching table row and insert it into
      // the results (to make it appear underneath the current
      // row.)
      _row.subRows.forEach((_subRow: any) => {

        result.push(
          // Find and add it
          children.find(
            _child =>
              _child.original.id === _subRow.original.id
            )
          );
      });
    }
  });

  return result;
};
