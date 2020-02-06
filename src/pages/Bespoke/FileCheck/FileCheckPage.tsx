import React, { FC, useState } from 'react';

import { Container } from './styles';
import { FeatureSectionStyled } from '../../../components/SettingsForm/components/FeatureSection';
import { generateTitleAndDescription } from '../../../components/SettingsForm/components/helpers/generateTitleAndDescription';
import Button from '../../../components/Button';
import Icon from '../../../components/Icon';

interface IProps {
  path: string;
}

const FileCheckPage: FC<IProps> = () => {
  const [fileChecking, startCheck] = useState(false);
  return (
    <Container>
      <FeatureSectionStyled>
        <h1 className='feature-section-title'>File Integrity Check</h1>
        <div className='form-row' style={{ justifyContent: 'flex-start' }}>
          <label>File Integrity Check</label>
          <div className='sub-container'>
            {generateTitleAndDescription('field-container', {
              description:
                'Audits your files to ensure they match the ones that Deskpro thinks should exist. This helps prevent issues to do with invalid uploads or file copies, as well as security issues.'
            })}
            {!fileChecking && (
              <div className='form-ctrl'>
                <Button
                  styleType='secondary'
                  onClick={() => {
                    startCheck(true);
                  }}
                  size='small'
                  className='check-btn'
                >
                  <Icon name='menu' />
                  Start File Integrity Check
                </Button>
              </div>
            )}
            {fileChecking && (
              <div className='form-ctrl'>
                <Button
                  styleType='secondary'
                  onClick={() => {}}
                  size='small'
                  className='log-btn'
                >
                  <Icon name='down' />
                  Show Log
                </Button>
              </div>
            )}
            {fileChecking && (
              <div className='form-ctrl'>
                <Button
                  styleType='secondary'
                  onClick={() => {}}
                  size='small'
                  className='log-btn'
                >
                  <Icon name='down' />
                  Show Log
                </Button>
              </div>
            )}
          </div>
        </div>
      </FeatureSectionStyled>
    </Container>
  );
};

export default FileCheckPage;
