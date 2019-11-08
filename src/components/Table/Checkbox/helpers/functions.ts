import {SyntheticEvent} from 'react';

type onChangeCallbackType = (
  event:SyntheticEvent<HTMLInputElement>,
  id:number
) => void;

export const onSelectChange = (
  event:SyntheticEvent<HTMLInputElement>,
  id:number,
  onChangeCallback:onChangeCallbackType
) => {
  if(onChangeCallback) {
    onChangeCallback(event, id);
  }
};