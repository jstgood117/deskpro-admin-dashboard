import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Icon from '../Icon';

export interface IProps {
  type: 'error' | 'success';
  errors?: string[];
}

const Text = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #4c4f50;
  .header-text {
    font-weight: 500;
  }
`;

const StyledErrorBoard = styled.div`
  background: rgba(253, 102, 127, 0.1);
  border-left: 4px solid #fd667f;
  padding: 16px 49px 16px 16px;
  width: 100%;
`;

const StyledSuccessBoard = styled.div`
  background: rgba(91, 182, 177, 0.1);
  border-left: 4px solid #5bb6b1;
  padding: 15px 49px 13px 41px;
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  .success-icon {
    position: absolute;
    left: 15px;
  }
`;

const Main = styled.div`
  padding: 0px 0px 52px 25px;
  position: relative;
  word-break: break-all;
  .error-icon {
    position: absolute;
    left: 4px;
    top: 3px;
  }
  .button-group {
    position: absolute;
    bottom: 0px;
    left: 25px;
    .helpdesk {
      padding-left: 8px;
    }
  }
`;

const FileCheckBoard: FC<IProps> = ({ errors, type }) => (
  <>
    {type === 'error' && errors.length > 0 && (
      <StyledErrorBoard>
        <Main>
          <span className='error-icon'>
            <Icon name='error2' />
          </span>
          <Text>
            <span className='header-text'>There was an error!</span> We detected
            some incorrect files. This might be caused by a corrupt upload or
            some other upload problem:
            <br />
            <br />
            {errors.map((error: string, index: number) => (
              <div key={index}>
                CHANGED:
                <br />
                <span>{error}</span>
                <br />
              </div>
            ))}
            <br />
            You should contact Deskpro Support to get help on how to fix this
            error. Include the above list with any message you send to us.
          </Text>
          <div className='button-group'>
            <Button
              styleType='secondary'
              onClick={() => {}}
              size='small'
              className='support'
            >
              <Icon name='nav.message' />
              Email support@deskpro.com
            </Button>
            <Button
              styleType='secondary'
              onClick={() => {}}
              size='small'
              className='helpdesk'
            >
              Visit our helpdesk
            </Button>
          </div>
        </Main>
      </StyledErrorBoard>
    )}
    {type === 'success' && (
      <StyledSuccessBoard>
        <span className='success-icon'>
          <Icon name='check' />
        </span>
        <Text>File integrity check complete! We have detected no issues.</Text>
      </StyledSuccessBoard>
    )}
  </>
);

export default FileCheckBoard;
