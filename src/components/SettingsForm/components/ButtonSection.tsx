import React from 'react';

import Button from '../../Button';
import Icon from '../../Icon';

const KayakoForm = ({ icon, text, ...props }: any) => {
  return (
    <Button {...props}>
      {icon && <Icon name={icon} />}
      {text}
    </Button>
  );
};

export default KayakoForm;
