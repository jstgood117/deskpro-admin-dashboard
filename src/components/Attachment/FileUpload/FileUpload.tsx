import React, { useState } from 'react';
import styled from 'styled-components';
import FileDrop from 'react-file-drop';
import { uniqueId } from 'lodash';
import Icon from '../../Icon';
import Button from '../../Button';
import Tooltip from '../../Tooltip';
import { dpstyle } from '../../Styled';

const InputFile = styled.input.attrs({
  type: 'file'
})`
  display: none;
`;

const Label = styled(dpstyle.div) <{ dragOver: boolean }>`
  display: inline-flex;
  font-size: 13px;
  color: ${props => props.theme.greyDark};
  background: ${props =>
    !props.dragOver ? props.theme.white : props.theme.pageHeader};
  button {
    background: ${props =>
    !props.dragOver ? props.theme.white : props.theme.pageHeader};
  }
  border: 1px dashed;
  border-color: ${props =>
    !props.dragOver ? props.theme.greyLight : props.theme.brandPrimary};
  border-radius: 4px;
  padding: 10px 16px;
  align-items: center;
`;

const StyledChooseFile = styled.label<{ dragOver: boolean }>`
  background: ${props =>
    !props.dragOver ? props.theme.white : props.theme.pageHeader};
  border: 1px solid;
  border-color: ${props => props.theme.greyLight};
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
  &:hover {
    color: ${props => props.theme.activeColour};
    path {
      fill: ${props => props.theme.activeColour};
    }
    border-color: ${props => props.theme.activeColour};
    background: ${props => props.theme.hoverColour};
  }
`;

export interface IProps {
  id?: string;
  onChangeFile?: (e: any) => void;
  files: FileList;
}
const randomId = uniqueId().toString();

const FileUpload: React.FC<IProps> = ({ id, onChangeFile, files }) => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>();
  const [dragOver, setDragover] = useState<boolean>(false);
  const reader = new FileReader();
  reader.onloadend = () => {
    setImagePreviewUrl(reader.result as string);
  };
  if (files && files.length > 0) {
    reader.readAsDataURL(files[0]);
  }
  const file = files && files[0];
  const fileTypes = file && file.type;
  const fileType = fileTypes && fileTypes.split('/')[0];
  const fileName = file && file.name;

  const onDrop = (e: FileList) => {
    onChangeFile(e);
    setDragover(false);
  };

  const onDragOver = () => {
    setDragover(true);
  };

  const onDragLeave = () => {
    setDragover(false);
  };

  return (
    <div>
      <InputFile
        id={id}
        onChange={e => {
          e.target.files && e.target.files.length > 0
            ? onChangeFile(e.target.files)
            : files
              ? onChangeFile(files)
              : onChangeFile(undefined);
        }}
      />
      <FileDrop
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
      >
        {!file && (
          <Label dragOver={dragOver}>
            <StyledChooseFile htmlFor={id} dragOver={dragOver}>
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
          <Label dragOver={dragOver}>
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
            {/* <span
              style={{ paddingLeft: 10, paddingRight: 10, display: 'flex' }}
            >
              <Icon name='file' />
            </span> */}
            {fileName}
            <Tooltip content='Remove file' styleType='dark' placement='bottom'>
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
            <Tooltip content='Edit file' styleType='dark' placement='bottom'>
              <span style={{ paddingLeft: 8 }}>
                <StyledChooseFile
                  htmlFor={id}
                  dragOver={dragOver}
                  style={{ width: 26, height: 26, boxSizing: 'content-box' }}
                >
                  <Icon name='upload' />
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
  id: randomId
};
export default FileUpload;
