import _ from 'lodash';

type setCheckedType = React.Dispatch<React.SetStateAction<object>>;

export const onCheckboxChange = (
  value:string,
  checked:object,
  setChecked:setCheckedType
) => {

  const keys = Object.keys(checked);

  if(keys.includes(value)) {

    const newIds = keys
      .filter(_id => _id !== value)
      .reduce((_obj, _id) => Object.assign(_obj, {[_id]: true}), {});
    setChecked(newIds);

  } else {

    setChecked({
      ...checked,
      [value]:true
    });

  }
};

export const onSelectAllChange = (
  isChecked: boolean,
  setChecked: setCheckedType,
  currentPage: number,
  pageSize: number,
  data: object[]
) => {

  if(!isChecked) {
    setChecked({});
  } else {

    const startPos = Math.max(((currentPage*pageSize)), 0);
    const endPos = Math.min(startPos+pageSize, data.length);

    const showingRows = _.slice(data, startPos, endPos);
    const ids = showingRows.map((_row:any) => ({
      [_row.id]:true
    }));
    setChecked(Object.assign({}, ...ids));
  }
};

export const onSelectEverything = (data: object[], setChecked: setCheckedType) => {

  const ids = data.map((_row:any) => ({
    [_row.id]:true
  }));
  setChecked(Object.assign({}, ...ids));
};