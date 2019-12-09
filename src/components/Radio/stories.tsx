import React from 'react';
import { storiesOf } from '@storybook/react';

import Radio from './Radio';

const RadioComponent: React.FC<{
  className?: string;
}> = ({ className }) => {
  const [option, setOption] = React.useState('');

  return (
    <div>
      <Radio
        className={className}
        setOption={(val: any) => {
          setOption(val);
        }}
        option={option}
        value='option1'
        id='option1'
        label='option1'
      />
      <Radio
        className={className}
        setOption={(val: any) => {
          setOption(val);
        }}
        option={option}
        id='option2'
        value='option2'
        label='option2'
      />
    </div>
  );
};

storiesOf('Radio', module).add('default', () => (
  <RadioComponent className='radio-option' />
));
