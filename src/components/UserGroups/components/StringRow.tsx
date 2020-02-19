import React, { FC, useCallback } from 'react';
import Icon from '../../Icon';

interface IProps {
  className?: string;
  index: number;
  onRemove: (index: number) => void;
  value: string;
}

export const StringRow: FC<IProps> = ({
  className = '',
  index,
  onRemove,
  value
}) => {
  const onRemoveClick = useCallback(() => onRemove(index), [
    index,
    onRemove
  ]);

  return (
    <div className={`string-row ${className}`}>
      {value}
      <span onClick={onRemoveClick}>
        <Icon name='trash' />
      </span>
    </div>
  );
};
