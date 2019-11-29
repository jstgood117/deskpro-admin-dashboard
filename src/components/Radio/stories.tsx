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
        containerStyle={{ marginRight: 12 }}
      />
      <Radio
        className={className}
        setOption={(val: any) => {
          setOption(val);
        }}
        option={option}
        value='option2'
      />
    </div>
  );
};

storiesOf('Radio', module).add('default', () => (
  <RadioComponent className='radio-option' />
));
