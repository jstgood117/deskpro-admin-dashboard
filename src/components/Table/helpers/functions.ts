import {SyntheticEvent} from 'react';

type setCheckedType = React.Dispatch<React.SetStateAction<object>>;

export const onSelectChange = (
  event:SyntheticEvent<HTMLInputElement>,
  checked:object,
  setChecked:setCheckedType
) => {

  // tslint:disable-next-line
  
  const id = event.currentTarget.value;
  const keys = Object.keys(checked);

  if(keys.includes(id)) {

    const newIds = keys
      .filter(_id => _id !== id)
      .reduce((_obj, _id) => Object.assign(_obj, {[_id]: true}), {});
    setChecked(newIds);
  } else {

    setChecked({
      ...checked,
      [id]:true
    });
  }
};