import React, { FC } from 'react';
import FeatureSectionContext from '../contexts/FeatureSectionContext';

type Props = {
  label: string;
  id?: string;
};

export const Label: FC<Props> = ({ label, id }) => {
  return (
    <FeatureSectionContext.Consumer>
      {context => {
        const htmlFor = context.prefixName ? `${context.prefixName}_${id}` : id;
        return (
          <div className='field-container'>
            {label && <label htmlFor={htmlFor}>{label}</label>}
          </div>
        );
      }}
    </FeatureSectionContext.Consumer>
  );
};

export default Label;
