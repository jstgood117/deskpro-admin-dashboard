import React from 'react';
import styled from 'styled-components';
import FileDrop from 'react-file-drop';
import Icon from '../../Icon';

const InputFile = styled.input.attrs({
  type: 'file'
})`
  display: none;
`;

const Label = styled.div`
  display: inline-flex;
  font-family: ${props => props.theme.mainFont};
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 150%;
  color: ${props => props.theme.greyDark};
  background: ${props => props.theme.white};
  border: 1px dashed ${props => props.theme.greyLight};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px 16px;
  align-items: center;
`;

const StyledChooseFile = styled.label`
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.greyLight};
  box-sizing: border-box;
  border-radius: 4px;
  height: 28px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.greyDark};
  cursor: pointer;
`;

export interface IProps {
  id?: string;
  onChangeFile?: (e: any) => void;
}

const FileUpload: React.SFC<IProps> = ({ id, onChangeFile }) => {
  return (
    <div>
      <InputFile
        id={id}
        onChange={e => {
          onChangeFile(e.target.files);
        }}
      />
      <FileDrop onDrop={onChangeFile}>
        <Label>
          <StyledChooseFile htmlFor={id}>
            <span
              style={{ paddingLeft: 14, paddingRight: 10, display: 'flex' }}
            >
              <Icon name='file' />
            </span>
            <span style={{ paddingRight: 11, display: 'flex' }}>
              Choose a file
            </span>
          </StyledChooseFile>
          <span
            style={{
              paddingLeft: 8,
              paddingRight: 8,
              fontStyle: 'italic'
            }}
          >
            or
          </span>
          <span
            style={{
              paddingRight: 8,
              display: 'flex'
            }}
          >
            <Icon name='drag-and-drop-file' />
          </span>
          Drag and drop
        </Label>
      </FileDrop>
    </div>
  );
};
FileUpload.defaultProps = {
  id: '1'
};
export default FileUpload;
