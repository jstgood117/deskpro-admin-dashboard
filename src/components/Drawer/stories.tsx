import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../Button';
import Drawer from './Drawer';

storiesOf('Drawer', module)
  .add('pull right', () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <div>
        <Drawer open={open} onClose={onClose}>
          <div>some contents...</div>
        </Drawer>

        <Button
          styleType='secondary'
          onClick={showDrawer}
          size='medium'
        >
          Open
        </Button>
      </div>
    );
  });
