import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../Button';
import Dialog from './Dialog';
import DialogTitle from './DialogTitle';
import DialogContent from './DialogContent';
import DialogContentText from './DialogContentText';
import DialogActions from './DialogActions';
import { FlowLayout, ControlBox } from '../Styled';

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
        <FlowLayout>
          <ControlBox>
            <Button
              styleType="primary"
              onClick={action('primary')}
              size="medium"
            >
              Yes, Delete Agents
            </Button>
          </ControlBox>

          <ControlBox marginLeft={10}>
            <Button
              styleType="secondary"
              onClick={action('optional')}
              size="medium"
            >
              Cancel, Keep Agents
            </Button>
          </ControlBox>
        </FlowLayout>
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
        <FlowLayout>
          <ControlBox>
            <Button
              styleType="primary"
              onClick={action('primary')}
              size="medium"
            >
              Yes, Delete Agents
            </Button>
          </ControlBox>

          <ControlBox marginLeft={10}>
            <Button
              styleType="secondary"
              onClick={action('optional')}
              size="medium"
            >
              Cancel, Keep Agents
            </Button>
          </ControlBox>
        </FlowLayout>
      </DialogActions>
    </Dialog>
  ));