import * as React from 'react';
import Icon from '../../Icon';

interface IProps {
  className?: string;
  index: number;
  onRemove: (index: number) => void;
  value: string;
}

export const StringRow: React.FC<IProps> = ({
  className = '',
  index,
  onRemove,
  value
}) => {
  const onClick = React.useCallback(() => onRemove(index), [index, onRemove]);

  return (
    <div className={className + ' string-row'} onClick={onClick}>
      {value}
      <Icon name='trash' />
    </div>
  );
};
