import React, { SFC, useState } from 'react';
import styled from 'styled-components';
import Card from '../Card';
import Avatar from '../../Avatar';
import Checkbox from '../../Checkbox';
import { H2, P3 } from '../../Typography';
import Button from '../../Button';
import { action } from '@storybook/addon-actions';

interface userTextDetail {
  text?: string;
  color?: string;
  textBackgroundColor?: string;
}

export interface userType {
  userName?: string;
  userNumber?: string;
  userMail?: string;
  userTexts?: userTextDetail[];
  avatar?: string;
}
export interface IProps {
  checkbox: boolean;
  cardDetails?: userType;
  styleType: 'default1' | 'default2';
}

interface StyleProps {
  styleType: 'default1' | 'default2';
}

const CardStyled = styled.div`
  width: 298px;
  display: flex;
`;

const Ellipse = styled.div`
  background: #54b162;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  position: absolute;
  right: 15px;
  top: 15px;
`;
const CheckboxWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 12px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const AvatarWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 15px;
`;

const TextAvatarStyled = styled.div`
  padding-left: 5px;
  padding-right: 5px;
`;
const StyledPermissionBtn = styled.div<StyleProps>`
  padding-right: ${props => (props.styleType === 'default1' ? '5px' : '25px')};
`;
const StyledAdminBtn = styled.div<StyleProps>`
  padding-left: ${props => (props.styleType === 'default1' ? '5px' : '25px')};
`;
const UserDefaultCard: SFC<IProps> = ({ checkbox, cardDetails, styleType }) => {
  const [checked, setChecked] = useState(false);
  return (
    <CardStyled>
      <Card>
        <Ellipse />
        {checkbox && (
          <CheckboxWrapper>
            <Checkbox
              checked={checked}
              value="checked"
              indeterminate={true}
              showArrow={false}
              onChange={event => setChecked(event.target.checked)}
            />
          </CheckboxWrapper>
        )}
        {cardDetails && (
          <ContentWrapper>
            <AvatarWrapper>
              <Avatar
                size={styleType === 'default1' ? 70 : 60}
                type="image"
                content={cardDetails.avatar}
              />
            </AvatarWrapper>
            <H2 style={{ paddingBottom: styleType === 'default1' ? 10 : 8 }}>
              {cardDetails.userName}
            </H2>
            <P3 style={{ paddingBottom: styleType === 'default1' ? 3 : 0 }}>
              {cardDetails.userNumber}
            </P3>
            <P3 style={{ paddingBottom: styleType === 'default1' ? 12 : 9 }}>
              {cardDetails.userMail}
            </P3>
            <div
              style={{
                display: 'flex',
                paddingBottom: styleType === 'default1' ? 12 : 15
              }}
            >
              {cardDetails.userTexts &&
                cardDetails.userTexts.length > 0 &&
                cardDetails.userTexts.map((textDetails, Index: number) => (
                  <TextAvatarStyled key={Index}>
                    <Avatar
                      type="text"
                      content={textDetails.text}
                      textColor={textDetails.color}
                      textBackgroundColor={textDetails.textBackgroundColor}
                    />
                  </TextAvatarStyled>
                ))}
            </div>
            <div
              style={{
                display: 'flex',
                paddingBottom: styleType === 'default1' ? 16 : 15
              }}
            >
              <StyledPermissionBtn styleType={styleType}>
                <Button
                  styleType="outlineGray"
                  styles={{ height: '22px', width: '105px' }}
                  onClick={action('All permission button clicked')}
                >
                  All Permissions
                </Button>
              </StyledPermissionBtn>
              <StyledAdminBtn styleType={styleType}>
                <Button
                  styleType="pink"
                  styles={{ height: '22px', width: '105px' }}
                  onClick={action('Administrator button clicked')}
                >
                  Administrator
                </Button>
              </StyledAdminBtn>
            </div>
          </ContentWrapper>
        )}
      </Card>
    </CardStyled>
  );
};
export default UserDefaultCard;
