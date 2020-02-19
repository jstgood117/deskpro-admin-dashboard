import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Drawer from '../Drawer';
import Icon from '../Icon';
import { ButtonStyleType } from '../Button/types';
import { DrawerHeader, DrawerFooter } from '../Drawer/DrawerStyles';
import { dpstyle } from '../Styled';

export interface IProps {
  styleType?: ButtonStyleType;
  icon?: string;
  text?: string;
}

const AddCalendarForm = (props: IProps) => {
  const [isOpened, openDrawer] = useState(false);
  const EditFormInputTitle = styled(dpstyle.div1)`
    font-weight: 500;
    font-size: 14px;
  `;

  const EditFormInputStyle = styled.div`
    padding-top: 4px;
    textarea {
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 150%;
      display: flex;
      align-items: center;
      color: #4c4f50;
      width: 100%;
      outline: none;
      border: 1px solid #d3d6d7;
      box-sizing: border-box;
      border-radius: 4px;
      resize: none;
    }
  `;

  return (
    <div>
      <Button
        styleType={props.styleType ? props.styleType : 'secondary'}
        onClick={() => {
          openDrawer(true);
        }}
        size='small'
      >
        {props.icon && <Icon name={props.icon} />}
        {props.text}
      </Button>
      <div>
        <Drawer
          open={isOpened}
          onClose={() => {
            openDrawer(false);
          }}
        >
          <DrawerHeader>Add calendar</DrawerHeader>
          <div style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 19 }}>
            <EditFormInputTitle>Link</EditFormInputTitle>
            <EditFormInputStyle>
              <textarea />
            </EditFormInputStyle>
          </div>
          <DrawerFooter>
            <Button styleType='primary' size='medium'>
              Save
            </Button>
            <Button styleType='secondary' size='medium'>
              Delete
            </Button>
          </DrawerFooter>
        </Drawer>
      </div>
    </div>
  );
};

export default AddCalendarForm;