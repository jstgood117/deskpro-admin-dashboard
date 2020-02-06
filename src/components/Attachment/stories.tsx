import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Attachment from './Attachment';
import FileUpload from './FileUpload';

const FileUploadComponent: React.FC = () => {
  const [file, onChangeFile] = useState();
  return <FileUpload onChangeFile={onChangeFile} files={file} />;
};

storiesOf('File Upload', module)
  .add('attachment', () => <Attachment text='Attachment 1' />)
  .add('file upload', () => <FileUploadComponent />);
