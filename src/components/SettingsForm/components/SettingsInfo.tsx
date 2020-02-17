import React, { FC } from 'react';
import styled from 'styled-components';

import Icon from '../../Icon';
import { dpstyle } from '../../Styled';

const Container = styled.div`
  display: flex;
  position: relative;
  width: 703px;
  margin: -13px 0px 16px 25px;
  border-left: 4px solid #9FCCF3;
  background: rgba(225, 238, 251, 0.3);
  padding: 16px 49px 16px 16px;
  box-sizing: border-box;
`;

const StyledText = styled(dpstyle.div1)`
  font-size: 13px;
  color: #4C4F50;
  opacity: 0.9;
`;

const StyledClose = styled.div`
  position: absolute;
  right: 18px;
  top: 18px;
  width: 10.5px;
  height: 10.5px;
  cursor: default;
  svg {
    width: 100%;
    height: 100%;
    path {
      fill: ${props => props.theme.staticColour};
    }
    &:hover {
      path {
        fill: ${props => props.theme.activeColour};
      }
    }
  }
`;

const SettingsInfo: FC = (props: any) => {
  const open = !props.showOn || props.formikProps.values[props.showOn];

  return (
    <div className='settings-info form-item'>
      {open && (
        <Container>
          <StyledText>
            {props.title}
          </StyledText>
          <StyledClose
            onClick={() => props.formikProps.setFieldValue(props.showOn, false)}
          >
            <Icon name='close' />
          </StyledClose>
        </Container>
      )}
    </div>
  );
};

export default SettingsInfo;
