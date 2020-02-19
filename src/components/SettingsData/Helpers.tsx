import React, { useState, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';

import Card from '../Card';
import Toggle from '../Toggle';
import Icon from '../Icon';
import Tooltip from '../Tooltip';
import {
  StyledHeader,
  StyledText,
  StyledSettingInfo,
  CloseIconWrapper,
  DollarIconWrapper
} from './styles';

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
  children?: ReactNode;
}> = props => {
  const [closed, setClose] = React.useState(false);

  if (!closed) {
    return (
      <StyledSettingInfo>
        {props.children}
        <CloseIconWrapper
          onClick={() => {
            setClose(true);
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
