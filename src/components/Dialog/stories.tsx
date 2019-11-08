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
import ConfirmDialog from './ConfirmDialog';
import { H3 } from '../Typography';

storiesOf('Dialog', module)
  .add('auto open without backdrop', () => (
    <Dialog isOpen={true}>
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
              styleType='primary'
              onClick={action('primary')}
              size='medium'
            >
              Yes, Delete Agents
            </Button>
          </ControlBox>

          <ControlBox marginLeft={10}>
            <Button
              styleType='secondary'
              onClick={action('optional')}
              size='medium'
            >
              Cancel, Keep Agents
            </Button>
          </ControlBox>
        </FlowLayout>
      </DialogActions>
    </Dialog>
  ))
  .add('auto open with backdrop', () => (
    <Dialog isOpen={true} showBackdrop={true}>
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
              styleType='primary'
              onClick={action('primary')}
              size='medium'
            >
              Yes, Delete Agents
            </Button>
          </ControlBox>

          <ControlBox marginLeft={10}>
            <Button
              styleType='secondary'
              onClick={action('optional')}
              size='medium'
            >
              Cancel, Keep Agents
            </Button>
          </ControlBox>
        </FlowLayout>
      </DialogActions>
    </Dialog>
  ))
  .add('confirm dialog with danger variant', () => (
    <ConfirmDialog
      icon='trash'
      isOpen={true}
      variant='danger'
      title='Delete agent?'
      leftButtonText='Delete Agents'
      rightButtonText='Keep Agents'
      onLeftButtonClick={action('onLeftButtonClick')}
      onRightButtonClick={action('onRightButtonClick')}
      text={`Deleting 304 agents will change their status to 'deleted'`}
    />
  ))
  .add('confirm dialog with default variant', () => {
    const Body = (
      <div>
        <H3>
          A disabled number will be removed from queues and targets. The number
          won't be able to accept or make calls.
        </H3>
        <br />
        <H3>
          You will still retain ownership over the number and will continue to
          pay the rental fee. You can re-enable the number any time in the
          future.
        </H3>
      </div>
    );
    return (
      <ConfirmDialog
        icon='cancel-call'
        isOpen={true}
        title='Disable number?'
        body={Body}
        leftButtonText='Disable Number'
        rightButtonText='Keep Number'
        onLeftButtonClick={action('onLeftButtonClick')}
        onRightButtonClick={action('onRightButtonClick')}
      />
    );
  });