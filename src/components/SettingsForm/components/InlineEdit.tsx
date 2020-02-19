import React, { FC, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../../Theme';
import { dpstyle } from '../../Styled';
import Button from '../../Button';
import Icon from '../../Icon';
import Input from '../../Input';
import FieldElement from './FieldElement';

export interface IProps {
  inline: any;
  field: any;
  formikProps: any;
}

const InlineEditWrapper = styled(dpstyle.div) <{ editing: boolean }>`
  display: flex;
  align-items: center;
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  };
  width: 825px;
  &:hover {
    .edit-btn, .hourglass-undo-btn {
      display: ${props => !props.editing && 'block'};
    }
  }
  &:hover {
    > div {
        background: ${props => !props.editing && 'rgba(232, 235, 238, 0.5)'};
    }
  }
  .edit-btn button {
     width: 24px;
     height: 24px;
   }
  .hourglass-undo-btn button {
    width: 36px;
    height: 22px;
  }
`;

const StyledEditBox = styled(dpstyle.div1) <{ editing: boolean }>`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 150%;
  height: 30px;
  border-radius: 6px;
  padding-left: 35px;
  padding-right: 40px;
  position: relative;
  min-width: 515px;
  box-shadow: ${props => props.editing && '0px 3px 8px rgba(0, 0, 0, 0.25)'};
  .edit-btn, .hourglass-undo-btn  {
    display: none;
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

interface InlineProps {
  id: string;
  type: string;
  label: string;
}

const InlineEdit: FC<IProps> = ({ inline, formikProps, field }) => {
  const [editing, setEdit] = useState(false);
  const resetValueInput = ({ id, type }: InlineProps) => {
    if (type === 'input') {
      formikProps.setFieldValue(id, formikProps.values[`${id}_default`]);
    }
  };

  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <InlineEditWrapper editing={editing}>
        <FieldElement {...field} formikProps={formikProps} />
        <StyledEditBox editing={editing}>
          {inline.map(({ type, label, id }: InlineProps, key: number) => {
            return (
              <React.Fragment key={key}>
                {type === 'label' && label}
                {editing && type === 'input' ? (
                  <React.Fragment>
                    &nbsp;
                    <Input
                      value={formikProps.values[id]}
                      placeholder='Placeholder'
                      type='number'
                      onChange={event => {
                        formikProps.setFieldValue(id, event.target.value);
                      }}
                      inputType='primary'
                      style={{
                        width: 25,
                        height: 25,
                        textAlign: 'center'
                      }}
                    />
                    &nbsp;
                  </React.Fragment>
                ) : ''}
                {
                  !editing && type === 'input' ? (
                    <div style={{ fontWeight: 500, fontFamily: 'Rubik', fontSize: 15 }}>
                      &nbsp;
                      {formikProps.values[id]}
                      &nbsp;
                      </div>
                  ) : ''
                }
              </React.Fragment>
            );
          })}
          <div style={{ position: 'absolute', right: 8 }} className='edit-btn'>
            <Button
              styleType='tertiary'
              onClick={() => {
                setEdit(true);
              }}
              size='small'
              iconOnly={true}
              style={{
                width: 25,
                height: 25
              }}
            >
              <Icon name='pencil' />
            </Button>
          </div>
          <div style={{ position: 'absolute', right: '-50px' }} className='hourglass-undo-btn'>
            <Button
              styleType='tertiary'
              onClick={() => {
                console.log('Click hourglass');
              }}
              size='small'
              iconOnly={true}
            >
              <Icon name='hourglass' />
            </Button>
          </div>
          <div style={{ position: 'absolute', right: '-94px' }} className='hourglass-undo-btn'>
            <Button
              styleType='tertiary'
              onClick={() => {
                inline.map(resetValueInput);
              }}
              size='small'
              iconOnly={true}
            >
              <Icon name='undo' />
            </Button>
          </div>
        </StyledEditBox>
        {editing && (
          <ButtonWrapper style={{ marginLeft: 24 }}>
            <Button
              styleType='tertiary'
              onClick={() => {
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
                setEdit(false);
              }}
              size='small'
            >
              Cancel
            </Button>
          </ButtonWrapper>
        )}
      </InlineEditWrapper>
    </ThemeProvider>
  );
};

export default InlineEdit;
