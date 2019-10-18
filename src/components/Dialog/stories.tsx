import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../Button';
import Dialog from './Dialog';
import DialogTitle from './DialogTitle';
import DialogContent from './DialogContent';
import DialogContentText from './DialogContentText';
import DialogActions from './DialogActions';

storiesOf('Dialog', module)
  .add('auto open without backdrop', () => (
    <Dialog isOpen={true} onRequestClose={() => {}}>
      <DialogTitle>Delete Agent?</DialogTitle>

      <DialogContent>
        <DialogContentText>
          Deleting 304 agents will change their status to ‘deleted’.
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button styleType="primary" onClick={action('primary')} styles={{height: '30px'}}>
          Yes, Delete Agents
        </Button>

        <Button styleType="secondary" onClick={action('optional')} styles={{height: '30px'}}>
          Cancel, Keep Agents
        </Button>
      </DialogActions>
    </Dialog>
  ))
  .add('auto open with backdrop', () => (
    <Dialog isOpen={true} showBackdrop={true} onRequestClose={() => {}}>
      <DialogTitle>Delete Agent?</DialogTitle>

      <DialogContent>
        <DialogContentText>
          Deleting 304 agents will change their status to ‘deleted’.
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button styleType="primary" onClick={action('primary')} styles={{height: '30px'}}>
          Yes, Delete Agents
        </Button>

        <Button styleType="secondary" onClick={action('optional')} styles={{height: '30px'}}>
          Cancel, Keep Agents
        </Button>
      </DialogActions>
    </Dialog>
  ));