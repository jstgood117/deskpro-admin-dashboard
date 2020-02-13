import _ from 'lodash';

import { objectUseState } from '../types';
import { KeyValue } from '../../../types';

export const onSelectAllChange = (
  isChecked: boolean,
  setChecked: objectUseState,
  currentPage: number,
  pageSize: number,
  data: any[]
) => {
  if (!isChecked) {
    setChecked({});
    return true;
  } else {
    const startPos = Math.max(currentPage * pageSize, 0);
    const endPos = Math.min(startPos + pageSize, data.length);

    const showingRows = _.slice(data, startPos, endPos);
    const ids = getIdsFromData(showingRows);
    setChecked(Object.assign({}, ...ids));
    return true;
  }
};

export const onSelectEverything = (data: any[], setChecked: objectUseState) => {
  const ids = getIdsFromData(data);
  setChecked(Object.assign({}, ...ids));
  return true;
};

export const getIdsFromData = (data: any) => {
  const ids = data.map((_row: KeyValue) => {
    const id = (_row.original && _row.original.id) || _row.id;
    return {
      [id]: true
    };
  });
  data.forEach((row: KeyValue) => {
    if (row.subRows.length > 0) {
      row.subRows.forEach((_row: KeyValue) => {
        const id = (_row.original && _row.original.id) || _row.id;
        ids.push({
          [id]: true
        });
      });
    }
  });
  return ids;
};
