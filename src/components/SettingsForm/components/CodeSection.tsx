import React from 'react';

import Code from '../../Code';

const CodeSection = (props: any) => {
  return (
    <div className='code-section'>
      <Code>{props.code}</Code>
      {props.description && (
        <p className='description'>{props.description}</p>
      )}
    </div>
  );
};

export default CodeSection;
