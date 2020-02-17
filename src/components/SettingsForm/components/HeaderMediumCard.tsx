import React, { FC, useState } from 'react';
import styled from 'styled-components';

import Card from '../../Card';
import Toggle from '../../Toggle';
import { StyledText } from '../../SettingsData/Helpers';
import { dpstyle } from '../../../style/styled';

const StyledHeader = styled(dpstyle.div)`
  padding: 26px 24px 26px 24px;
  display: flex;
  height: 100%;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 100%;
`;

const WrapperHeader = styled(dpstyle.div)`
  height: 167px;
  width: 728px;
  margin-bottom: 25px;
`;

interface IProps {
  title: string;
  description: string;
}

const HeaderMediumCard: FC<IProps> = ({ title, description }) => {
  const [checked, setChecked] = useState(false);
  return (
    <WrapperHeader>
      <Card>
        <StyledHeader style={{ flexDirection: 'row' }}>
          <div style={{ flex: 6 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
              <div style={{ width: 30 }}>
                <Toggle
                  checked={checked}
                  value='checked'
                  onChange={event => setChecked(event.target.checked)}
                  size='medium'
                />
              </div>
              <StyledText
                style={{ fontSize: 14, paddingLeft: 14, paddingBottom: 5 }}
                isTitle={true}
              >
                {title}
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
                {description}
              </StyledText>
            </div>
          </div>
          <div
            style={{
              flex: 4,
              paddingLeft: 24,
              backgroundImage: `url(${require('../../../assets/svg/settings-header2.svg')})`,
              backgroundRepeat: ' no-repeat',
              backgroundSize: 'contain',
              backgroundPosition: '100%'
            }}
          />
        </StyledHeader>
      </Card>
    </WrapperHeader>
  );
};

export default HeaderMediumCard;
