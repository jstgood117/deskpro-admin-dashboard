import React from 'react';

import Button from '../../Button';
import Icon from '../../Icon';

const ButtonSection = ({ icon, text, ...props }: any) => {
  console.log(props);
  return (
    <Button
      {...props}
      onClick={() => {
        props.state
          ? props.formikProps.setFieldValue(
              props.state,
              !props.formikProps.values[props.state]
            )
          : console.log(props.formikProps);
      }}
    >
      {icon && <Icon name={icon} />}
      {text}
    </Button>
  );
};

export default ButtonSection;
