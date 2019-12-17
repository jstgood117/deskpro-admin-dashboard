import React, { FC, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { DeskproAdminTheme } from '../Theme';
import { dpstyle } from '../Styled';
import Button from '../Button';
import Icon from '../Icon';
import Input from '../Input';

export interface IProps {
  children?: any;
  error: boolean;
  inputValues: number[];
  setValues: (vals: number[]) => void;
}

const InlileEditWrapper = styled(dpstyle.div)`
  display: flex;
  align-items: center;
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const StyledEditBox = styled(dpstyle.div1)<{ editing: boolean }>`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 150%;
  height: 40px;
  border-radius: 6px;
  padding-left: 8px;
  padding-right: 40px;
  position: relative;
  min-width: 650px;
  box-shadow: ${props => props.editing && '0px 3px 8px rgba(0, 0, 0, 0.25)'};
  .edit-btn {
    display: none;
  }
  &:hover {
    background: ${props => !props.editing && 'rgba(232, 235, 238, 0.5)'};
    .edit-btn {
      display: ${props => !props.editing && 'block'};
    }
  }
  .input-wrapper {
    padding: 0;
    .error-icon {
      display: none;
    }
  }
`;

const ButtonWrapper = styled.div`
  width: 70px;
  div {
    width: 100%;
    button {
      width: 100%;
      text-align: center;
      display: block;
    }
  }
`;
const InlineEdit: FC<IProps> = ({ error, inputValues, setValues }) => {
  const [editing, setEdit] = useState(false);
  const [inlineValues, setInlineValues] = useState(inputValues);

  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <InlileEditWrapper>
        <StyledEditBox editing={editing}>
          <FormattedMessage id={'admin.settings.inlineEdit.after'} />
          &nbsp;
          {editing ? (
            <Input
              value={inlineValues[0]}
              placeholder='Placeholder'
              hasError={error}
              type='number'
              onChange={event => {
                setInlineValues([
                  Number(event.target.value),
                  inlineValues[1],
                  inlineValues[2]
                ]);
              }}
              inputType='primary'
              style={{
                width: 30,
                height: 30,
                textAlign: 'center'
              }}
            />
          ) : (
            <div style={{ fontWeight: 500, fontFamily: 'Rubik', fontSize: 15 }}>
              {inlineValues[0]}
            </div>
          )}
          &nbsp;
          <FormattedMessage id={'admin.settings.inlineEdit.emailsWith'} />
          &nbsp;
          {editing ? (
            <Input
              value={inlineValues[1]}
              placeholder='Placeholder'
              type='number'
              hasError={error}
              inputType='primary'
              style={{
                width: 30,
                height: 30,
                textAlign: 'center'
              }}
              onChange={event => {
                setInlineValues([
                  inlineValues[0],
                  Number(event.target.value),
                  inlineValues[2]
                ]);
              }}
            />
          ) : (
            <div style={{ fontWeight: 500, fontFamily: 'Rubik', fontSize: 15 }}>
              {inlineValues[1]}
            </div>
          )}
          &nbsp;
          <FormattedMessage id={'admin.settings.inlineEdit.minutes'} />
          {', '}
          <FormattedMessage
            id={'admin.settings.inlineEdit.rejectMessagesFor'}
          />
          &nbsp;
          {editing ? (
            <Input
              value={inlineValues[2]}
              placeholder='Placeholder'
              hasError={error}
              inputType='primary'
              style={{
                width: 30,
                height: 30,
                textAlign: 'center'
              }}
              type='number'
              onChange={event => {
                setInlineValues([
                  inlineValues[0],
                  inlineValues[1],
                  Number(event.target.value)
                ]);
              }}
            />
          ) : (
            <div style={{ fontWeight: 500, fontFamily: 'Rubik', fontSize: 15 }}>
              {inlineValues[2]}
            </div>
          )}
          &nbsp;
          <FormattedMessage id={'admin.settings.inlineEdit.minutes'} />
          {'.'}
          <div style={{ position: 'absolute', right: 8 }} className='edit-btn'>
            <Button
              styleType='tertiary'
              onClick={() => {
                setEdit(true);
              }}
              size='small'
              iconOnly={true}
            >
              <Icon name='pencil' />
            </Button>
          </div>
        </StyledEditBox>
        {editing && (
          <ButtonWrapper style={{ marginLeft: 24 }}>
            <Button
              styleType='tertiary'
              onClick={() => {
                setValues(inlineValues);
                setEdit(false);
              }}
              size='small'
            >
              Save
            </Button>
          </ButtonWrapper>
        )}
        {editing && (
          <ButtonWrapper style={{ paddingLeft: 8 }}>
            <Button
              styleType='tertiary'
              onClick={() => {
                setInlineValues(inputValues);
                setEdit(false);
              }}
              size='small'
            >
              Cancel
            </Button>
          </ButtonWrapper>
        )}
      </InlileEditWrapper>
    </ThemeProvider>
  );
};

export default InlineEdit;
