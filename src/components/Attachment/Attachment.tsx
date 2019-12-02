import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

const InputFile = styled.input.attrs({
  type: 'file'
})`
  display: none;
`;

const Label = styled.label`
  font-family: ${props => props.theme.mainFont};
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 150%;
  color: ${props => props.theme.brandPrimary};
  svg {
    margin-right: 10px;
  }
`;

export interface IProps {
  id?: string;
  text?: string;
  onChangeFile?: (event: SyntheticEvent<HTMLInputElement>) => void;
}

const Attachment: React.SFC<IProps> = ({ id, text, onChangeFile }) => {
  return (
    <div>
      <InputFile id={id} onChange={onChangeFile} />
      <Label htmlFor={id}>
        <Icon name='attachment' />
        {text}
      </Label>
    </div>
  );
};
Attachment.defaultProps = {
  id: '1'
};
export default Attachment;
