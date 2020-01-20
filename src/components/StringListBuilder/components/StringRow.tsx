import * as React from 'react';
import Icon from '../../Icon';

interface IProps {
  className?: string;
  index: number;
  onEdit: (index: number) => void;
  onRemove: (index: number) => void;
  value: string;
}

export const StringRow: React.FC<IProps> = ({
  className = '',
  index,
  onEdit,
  onRemove,
  value
}) => {
  const onEditClick = React.useCallback(() => onEdit(index), [index, onEdit]);
  const onRemoveClick = React.useCallback(() => onRemove(index), [
    index,
    onRemove
  ]);

  return (
    <div className={className + ' string-row'} onClick={onEditClick}>
      {value}
      <span onClick={onRemoveClick}>
        <Icon name='trash' />
      </span>
    </div>
  );
};
