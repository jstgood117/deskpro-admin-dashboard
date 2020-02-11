import React, { useState, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';

import Card from '../Card';
import Toggle from '../Toggle';
import { dpstyle } from '../Styled';
import styled from 'styled-components';
import Icon from '../Icon';
import Tooltip from '../Tooltip';

const StyledHeader = styled(dpstyle.div)`
  padding: 26px 24px 26px 24px;
  display: flex;
  height: 100%;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 100%;
`;
export const StyledText = styled(dpstyle.div1)<{ isTitle: boolean }>`
  font-weight: ${props => (props.isTitle ? 500 : 'normal')};
  display: block;
  font-size: 13px;
  color: #4c4f50;
`;
export const ArrowRightIcon = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  height: 100%;
`;

const StyledSettingInfo = styled(dpstyle.div)`
  width: 100%;
  height: 100%;
  border-left: 4px solid #9fccf3;
  background: rgba(225, 238, 251, 0.3);
  padding: 16px 49px 16px 16px;
  position: relative;
  box-sizing: border-box;
`;
const CloseIconWrapper = styled.div`
  position: absolute;
  right: 18px;
  top: 18px;
  width: 10px;
  height: 10px;
  cursor: default;
  svg {
    width: 100%;
    height: 100%;
    path {
      fill: ${props => props.theme.staticColour};
    }
  }
  &:hover {
    svg {
      path {
        fill: ${props => props.theme.activeColour};
      }
    }
  }
`;

const DollarIconWrapper = styled.div`
  border-radius: 4px;
  width: 24px;
  height: 24px;
  display: inline-flex;
  svg {
    margin: auto;
  }
  cursor: pointer;
  &:hover {
    background: rgba(248, 175, 60, 0.25);
  }
`;
export const HeaderCard = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Card>
      <StyledHeader
        style={{
          backgroundImage: `url(${require('../../assets/svg/settings-header.svg')})`,
          flexDirection: 'column'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 30 }}>
            <Toggle
              checked={checked}
              value='checked'
              onChange={event => setChecked(event.target.checked)}
              size='medium'
            />
          </div>
          <StyledText style={{ fontSize: 18, paddingLeft: 14 }} isTitle={true}>
            Help Center
          </StyledText>
        </div>
        <div>
          <StyledText
            style={{
              maxWidth: '60%',
              paddingLeft: 44,
              fontSize: 13,
              color: '#8b9293'
            }}
            isTitle={false}
          >
            This help center is the public facing website that your users can
            use from their browser or mobile phone.
          </StyledText>
        </div>
      </StyledHeader>
    </Card>
  );
};

export const HeaderMediumCard = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Card>
      <StyledHeader style={{ flexDirection: 'row' }}>
        <div style={{ flex: 6 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: 30 }}>
              <Toggle
                checked={checked}
                value='checked'
                onChange={event => setChecked(event.target.checked)}
                size='medium'
              />
            </div>
            <StyledText
              style={{ fontSize: 18, paddingLeft: 14 }}
              isTitle={true}
            >
              Title
            </StyledText>
          </div>
          <div>
            <StyledText
              style={{
                maxWidth: '100%',
                paddingLeft: 44,
                fontSize: 13,
                color: '#8b9293'
              }}
              isTitle={false}
            >
              Info text
            </StyledText>
          </div>
        </div>
        <div
          style={{
            flex: 4,
            paddingLeft: 24,
            backgroundImage: `url(${require('../../assets/svg/settings-header2.svg')})`,
            backgroundRepeat: ' no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: '100%'
          }}
        />
      </StyledHeader>
    </Card>
  );
};

export const SettingInfo: React.FC<{
  onClose: (val: boolean) => void;
  closed: boolean;
  children?: ReactNode;
}> = props => {
  if (!props.closed) {
    return (
      <StyledSettingInfo>
        {props.children}
        <CloseIconWrapper
          onClick={() => {
            props.onClose(true);
          }}
        >
          <Icon name='close' />
        </CloseIconWrapper>
      </StyledSettingInfo>
    );
  } else {
    return null;
  }
};

export const SettingInfoInUse = () => {
  const [closed, setClose] = useState(false);
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        borderTop: '1px solid #EFF0F0',
        position: 'relative'
      }}
    >
      <StyledText
        style={{
          fontSize: 15,
          maxWidth: 271,
          marginTop: 31,
          display: 'flex'
        }}
        isTitle={true}
      >
        Section header
        {closed && (
          <div style={{ display: 'flex', paddingLeft: 8 }}>
            <Icon name='info-text' />
          </div>
        )}
      </StyledText>
      <div
        style={{
          height: 134,
          width: 688,
          position: 'absolute',
          top: 17,
          right: 0
        }}
      >
        <SettingInfo onClose={setClose} closed={closed}>
          <StyledText isTitle={false} style={{ fontSize: 13 }}>
            Setting Info
          </StyledText>
        </SettingInfo>
      </div>
    </div>
  );
};
export const FeatureBilling = () => {
  const [checked, setChecked] = useState(false);
  const [clickedDollar, clickDollar] = useState(false);
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'rgba(255, 248, 225, 0.3)',
        borderLeft: '4px solid #F8AF3C',
        padding: '10px 14px',
        display: 'flex'
      }}
    >
      <Tooltip
        content={
          <FormattedMessage id='admin.settings.headers.dollarSignTooltip' />
        }
        styleType='dark'
        placement='bottom'
      >
        <DollarIconWrapper
          onClick={() => {
            clickDollar(true);
          }}
        >
          <Icon name='ic-dollar-sign' />
        </DollarIconWrapper>
      </Tooltip>
      {clickedDollar && (
        <div style={{ paddingLeft: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', height: 24 }}>
            <div style={{ width: 30 }}>
              <Toggle
                checked={checked}
                value='checked'
                onChange={event => setChecked(event.target.checked)}
                size='medium'
              />
            </div>
            <StyledText
              style={{ fontSize: 18, paddingLeft: 14 }}
              isTitle={true}
            >
              Title
            </StyledText>
          </div>
          <div>
            <StyledText
              style={{
                maxWidth: '100%',
                paddingLeft: 44,
                fontSize: 13,
                color: '#8b9293'
              }}
              isTitle={false}
            >
              Info text
            </StyledText>
          </div>
        </div>
      )}
    </div>
  );
};
