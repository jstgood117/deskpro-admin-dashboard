import React from 'react';

import AgentSelector from '../../AgentSelector';

const CodeSection = (props: any) => {
  return (
    <div className='agent-selector'>
      <AgentSelector
        {...props}
        selected={props.formikProps.values[props.id]}
        onSelect={value => props.formikProps.setFieldValue(props.id, value)}
      />
    </div>
  );
};

export default CodeSection;
