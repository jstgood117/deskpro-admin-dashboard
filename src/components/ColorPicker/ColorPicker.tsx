import React, { FC } from 'react';
import styled from 'styled-components';

import Icon from '../Icon';
import ColorSwatch from '../ColorSwatch';

export interface IProps {
  onChange: (val: string) => void;
  value: string;
  className?: string;
  id?: string;
}

const ColorPickerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Label = styled.span`
  color: #8b9293;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 150%;
  text-transform: uppercase;
`;

const Toggle = styled.span`
  width: 24px;
  height: 24px;
  border: 1px solid #d3d6d7;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-left: 129px;
`;

const ColorPicker: FC<IProps> = ({ className, value, id }) => {
  const label = String(value).replace('#', '');
  return (
    <ColorPickerContainer className={className}>
      <ColorSwatch color={value} size='24px'>
        <Label>{label}</Label>
        <Toggle>
          <Icon name='pencil' />
        </Toggle>
      </ColorSwatch>
    </ColorPickerContainer>
  );
};

export default ColorPicker;
