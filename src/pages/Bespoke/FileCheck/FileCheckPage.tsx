import React, { FC, useState } from 'react';

import { Container, ProgressLabel } from './styles';
import { FeatureSectionStyled } from '../../../components/SettingsForm/components/FeatureSection';
import { generateTitleAndDescription } from '../../../components/SettingsForm/components/helpers/generateTitleAndDescription';
import Button from '../../../components/Button';
import Icon from '../../../components/Icon';
import ProgressBar from '../../../components/ProgressBar';
import FileCheckBoard from '../../../components/FileCheckBoard';

interface IProps {
  path: string;
}
const errors: string[] = [
  '/usr/share/nginx/deskpro/site41500/config_new/advanced/config.settings.php',
  '/usr/share/nginx/deskpro/site41500/config_new/advanced/config.settings.php',
  '/usr/share/nginx/deskpro/site41500/config_new/advanced/config.settings.php',
  '/usr/share/nginx/deskpro/site41500/config_new/advanced/config.env.php'
];
const FileCheckPage: FC<IProps> = () => {
  const [fileChecking, startCheck] = useState(false);
  const [showedLog, showLog] = useState(false);
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
              <div className='form-ctrl inside-group'>
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
              <>
                <div className='form-ctrl inside-group'>
                  <ProgressLabel>
                    Checking files: 113 of 113 checks performed
                  </ProgressLabel>
                  <ProgressBar percentage={40} />
                </div>
                <div className='form-ctrl inside-group'>
                  <Button
                    styleType='secondary'
                    onClick={() => {
                      showLog(!showedLog);
                    }}
                    size='small'
                    className='log-btn'
                  >
                    <Icon name={!showedLog ? 'down' : 'up'} />
                    {!showedLog ? 'Show Log' : 'Hide Log'}
                  </Button>
                </div>
                {showedLog && (
                  <div className='form-ctrl file-log'>
                    <li>Batch 1 of 113:350 files verified</li>
                    <li>Batch 2 of 113:350 files verified</li>
                    <li>Batch 3 of 113:350 files verified</li>
                    <li>Batch 4 of 113:350 files verified</li>
                    <li>Batch 5 of 113:350 files verified</li>
                    <li>Batch 6 of 113:350 files verified</li>
                    <li>Batch 7 of 113:350 files verified</li>
                    <li>Batch 8 of 113:350 files verified</li>
                    <li>Batch 9 of 113:350 files verified</li>
                    <li>Batch 10 of 113:350 files verified</li>
                  </div>
                )}
                {showedLog && errors.length > 0 && (
                  <div className='form-ctrl board'>
                    <FileCheckBoard errors={errors} type='error' />
                  </div>
                )}
                {errors.length === 0 && (
                  <div className='form-ctrl board'>
                    <FileCheckBoard type='success' />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </FeatureSectionStyled>
    </Container>
  );
};

export default FileCheckPage;
