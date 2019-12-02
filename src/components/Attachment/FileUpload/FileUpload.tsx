import React, { useState } from 'react';
import styled from 'styled-components';
import FileDrop from 'react-file-drop';
import Icon from '../../Icon';
import Button from '../../Button';
import Tooltip from '../../Tooltip';

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
  svg {
    margin: auto;
  }
`;

export interface IProps {
  id?: string;
  onChangeFile?: (e: any) => void;
  files: FileList;
}

const FileUpload: React.SFC<IProps> = ({ id, onChangeFile, files }) => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState();
  const reader = new FileReader();
  reader.onloadend = () => {
    setImagePreviewUrl(reader.result);
  };
  files && files.length > 0 && reader.readAsDataURL(files[0]);
  const file = files && files[0];
  const fileTypes = file && file.type;
  const fileType = fileTypes && fileTypes.split('/')[0];
  const fileName = file && file.name;
  return (
    <div>
      <InputFile
        id={id}
        onChange={e => {
          e.target.files && e.target.files.length > 0
            ? onChangeFile(e.target.files)
            : files && onChangeFile(files);
        }}
      />
      <FileDrop onDrop={onChangeFile}>
        {!file && (
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
        )}
        {file && (
          <Label>
            {fileType === 'image' && imagePreviewUrl ? (
              <img
                src={imagePreviewUrl}
                alt='uploaded'
                style={{
                  width: 32,
                  height: 32,
                  objectFit: 'fill',
                  borderRadius: 4
                }}
              />
            ) : (
              <Icon name='elephant' />
            )}
            <span
              style={{ paddingLeft: 10, paddingRight: 10, display: 'flex' }}
            >
              <Icon name='file' />
            </span>
            {fileName}
            <Tooltip
              content='Remove current file'
              styleType='dark'
              placement='bottom'
            >
              <span style={{ paddingLeft: 8 }}>
                <Button
                  styleType='tertiary'
                  onClick={() => {
                    onChangeFile(undefined);
                  }}
                  size='small'
                  iconOnly={true}
                >
                  <Icon name='trash' />
                </Button>
              </span>
            </Tooltip>
            <Tooltip content='Edit' styleType='dark' placement='bottom'>
              <span style={{ paddingLeft: 8 }}>
                <StyledChooseFile
                  htmlFor={id}
                  style={{ width: 26, height: 26, boxSizing: 'content-box' }}
                >
                  <Icon name='pencil' />
                </StyledChooseFile>
              </span>
            </Tooltip>
          </Label>
        )}
      </FileDrop>
    </div>
  );
};
FileUpload.defaultProps = {
  id: '1'
};
export default FileUpload;
