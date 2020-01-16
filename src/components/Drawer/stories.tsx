import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import EditAgentForm from  './Forms/EditAgentForm';
import Button from '../Button';
import Drawer from './Drawer';

storiesOf('Drawer', module)
  .add('pull right', () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };

    const closeDrawer = () => {
      setOpen(false);
    };

    return (
      <div>
        <Drawer open={open} onClose={closeDrawer}>
          <EditAgentForm />
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
