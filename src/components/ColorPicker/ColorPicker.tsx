import React, { FC, useState } from 'react';
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
  cursor: pointer;
`;

//   margin-left: 129px;

const Input = styled.input`
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  position: relative;
  height: 24px;
  border: 1px solid #d3d6d7;
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
  color: #4c4f50;
  width: 90px;
  padding: 4px 10px;
`;

const ColorPicker: FC<IProps> = ({ id, className, value, onChange }) => {
  const [editMode, setEditMode] = useState(false);
  const label = String(value).replace('#', '');

  return (
    <ColorPickerContainer className={className}>
      <ColorSwatch color={value} size='24px'>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 211
          }}
        >
          {editMode ? (
            <React.Fragment>
              <Input
                value={value}
                onChange={event => onChange(event.target.value)}
                onBlur={() => setEditMode(false)}
              />
              <Toggle onClick={() => setEditMode(false)}>
                <Icon name='close' />
              </Toggle>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Label>{label}</Label>
              <Toggle onClick={() => setEditMode(true)}>
                <Icon name='pencil' />
              </Toggle>
            </React.Fragment>
          )}
        </div>
      </ColorSwatch>
    </ColorPickerContainer>
  );
};

export default ColorPicker;
