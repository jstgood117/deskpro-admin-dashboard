import React, { FC } from 'react';

type Props = {
  label: string;
  id?: string;
};

export const Label: FC<Props> = ({ label, id }) => {
  const htmlFor = id || '';
  return (
    <div className='field-container'>
      {label && <label htmlFor={htmlFor}>{label}</label>}
    </div>
  );
};

export default Label;
