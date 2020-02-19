import React, { FC, useState, useEffect } from 'react';

import Button from '../../Button';
import {
  DrawerHeader,
  DrawerBody,
  DrawerFooter
} from '../../Drawer/DrawerStyles';
import UserGroupSelector from '../../UserGroupSelector';

export interface Items {
  id: number;
  value: string;
  selected: boolean;
}

interface IProps {
  id: string;
  open: boolean;
  title: string;
  options: string[];
  selectedOptions: string[];
  onCancel: () => void;
  formikProps: any;
}

const UserGroupsForm: FC<IProps> = ({
  id,
  open,
  title,
  options,
  selectedOptions,
  onCancel,
  formikProps
}) => {

  const getInitialItems = () =>
    options.map((option: string, index: number) => ({
      id: index,
      value: option,
      selected: selectedOptions && selectedOptions.includes(option),
    }));

  const [items, setItems] = useState(getInitialItems());

  useEffect(() => {
    if (open) {
      setItems(getInitialItems());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const onSelect = (newItems: Items[]) => {
    setItems(newItems);
  };

  const onSaveClick = () => {
    const updatedValues = [];
    for (const item of items) {
      if (item.selected)
        updatedValues.push(item.value);
    }

    formikProps.setFieldValue(id, updatedValues);
    onCancel();
  };

  return (
    <div>
      <DrawerHeader>
        {title}
      </DrawerHeader>
      <DrawerBody>
        <UserGroupSelector
          items={items}
          onSelect={newItems => onSelect(newItems)}
        />
      </DrawerBody>
      <DrawerFooter>
        <Button
          styleType='primary'
          size='medium'
          onClick={onSaveClick}
        >
          Save
        </Button>
        <Button
          styleType='secondary'
          size='medium'
          className='btn-cancel'
          onClick={onCancel}
        >
          Cancel
        </Button>
      </DrawerFooter>
    </div>
  );
};

export default UserGroupsForm;