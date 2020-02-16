import React, { FC } from 'react';
import styled from 'styled-components';
import {dpstyle} from '../../../style/styled';

type Props = {
  id?: string;
  placeholder?: string;
  formikProps?: any
};

export const InputStyled = styled(dpstyle.textarea)`
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 150%;
  position: relative;
  background: transparent;
  height: 58px;
  box-sizing: border-box;
  border: 1px solid #D3D6D7;
  border-radius: 4px;
  outline: none;
  color: ${props => props.theme.staticColour};
  width: 578px;
  resize: none;
  ::placeholder {
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 150%;
    color: ${props => props.theme.greyDark};
  }
  :focus {
    box-shadow: 0px 0px 8px #D2D8DD;
    border-color: #9fccf3;
  }
`;

export const TextArea: FC<Props> = (
  {
    placeholder,
    formikProps,
    id
  }
) => {
  return (
    <div>
      <InputStyled
        value={formikProps.values[id]}
        placeholder={placeholder}
        onChange={(e: any) => {
          formikProps.setFieldValue(id, e.target.value);
        }}
      />
    </div>
  );
};

export default TextArea;
