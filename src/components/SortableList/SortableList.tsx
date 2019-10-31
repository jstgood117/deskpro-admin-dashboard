import React, { ReactNode } from 'react';
import Sortable from 'react-sortablejs';

export interface IProps {
  children: ReactNode;
  onChange: (e: any) => void;
  restore?: (e: any) => void;
}

const SortableList = ({ onChange, children, restore }: IProps) => {
  return (
    <div>
      <Sortable
        onChange={(order: Array<string>) => {
          onChange(order);
        }}
      >
        {children}
      </Sortable>
    </div>
  );
};

export default SortableList;
