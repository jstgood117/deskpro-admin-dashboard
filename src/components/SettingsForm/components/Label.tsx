import React, { FC } from 'react';

type Props = {
  label: string;
};

export const Label: FC<Props> = ({
  label
}) => {

  return (
    <div className='field-container'>
      {label && <label>{label}</label>}
    </div>
  );
};

export default Label;