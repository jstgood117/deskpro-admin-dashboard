import React, { FC, TextareaHTMLAttributes } from 'react';
import styled from 'styled-components';
import { dpstyle } from '../../../style/styled';

type Props = {
  placeholder?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const InputStyled = styled(dpstyle.textarea)`
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 150%;
  position: relative;
  background: transparent;
  height: 58px;
  box-sizing: border-box;
  border: 1px solid #d3d6d7;
  border-radius: 4px;
  outline: none;
  color: ${props => props.theme.staticColour};
  width: 578px;
  resize: none;
  ::placeholder {
    font-family: Lato, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 150%;
    color: ${props => props.theme.greyDark};
  }
  :focus {
    box-shadow: 0px 0px 8px #d2d8dd;
    border-color: #9fccf3;
  }
`;

export const TextArea: FC<Props> = ({ ...props }) => {
  return (
    <div>
      <InputStyled {...props} />
    </div>
  );
};

export default TextArea;
