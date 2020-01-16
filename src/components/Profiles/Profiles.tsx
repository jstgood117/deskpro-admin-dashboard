import * as React from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';
import { getColorByChar } from '../../utils/getRandomColor';
import Button from '../Button';
import Icon from '../Icon';

interface IProfile {
  avatarUrn: string;
}

interface IProps {
  editable?: boolean;
  emptyText?: string;
  onEditClick?: () => void;
  profiles?: {
    name: string;
    avatarUrn?: string;
  }[];
  max?: number;
  title: string;
}

const ProfilesContainer = styled.div``;
const ProfilesTitle = styled.div`
  padding-bottom: 8px;
  border-bottom: 1px solid #eff0f0;
  margin-bottom: 16px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: #4c4f50;
  width: 386px;
`;

// Amount of users
const ProfileTitleNotice = styled.span`
  margin-left: 8px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 150%;
  display: inline-block;
  align-items: center;
  color: #a9b0b0;
`;
const ProfilesContent = styled.div`
  display: flex;
  position: relative;
`;
const ProfileAvatar = styled.div`
  display: inline-block;
  max-width: 36px;
  & > div {
    border: ${props => `3px solid ${props.theme.white}`};
    border-image-width: 0;
    border-radius: 100%;
    width: 36px;
    height: 36px;
  }
  & > div > img {
    box-shadow: none;
  }
`;
const ProfileMoreNotice = styled.span`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  align-items: center;
  color: #8b9293;
  display: flex;
  align-items: center;
  margin-left: 14px;
  height: 42px;
`;
const ProfileEditButton = styled.div`
  position: absolute;
  left: 320px;
  top: 6px;
`;

const Profiles: React.FC<IProps> = ({
  editable,
  emptyText,
  onEditClick,
  max,
  profiles,
  title
}) => (
  <ProfilesContainer>
    <ProfilesTitle>
      {title}
      {!!profiles.length && (
        <ProfileTitleNotice>
          ({profiles.length}
          {max && ` of ${max}`})
        </ProfileTitleNotice>
      )}
    </ProfilesTitle>
    <ProfilesContent>
      {!(profiles && profiles.length) && (
        <ProfileMoreNotice>{emptyText || 'No profiles'}</ProfileMoreNotice>
      )}
      {profiles &&
        profiles.slice(0, 6).map((profile, index) => {
          const colors = getColorByChar(profile.name[0]);
          return (
            <ProfileAvatar key={index}>
              <Avatar
                content={profile.avatarUrn || profile.name}
                textBackgroundColor={colors.background}
                textColor={colors.textColor}
                size={36}
                textSize={32}
                type={profile.avatarUrn ? 'image' : 'text'}
              />
            </ProfileAvatar>
          );
        })}
      {profiles && profiles.length > 6 && (
        <ProfileMoreNotice>+ {profiles.length - 6}</ProfileMoreNotice>
      )}
      {editable && onEditClick && (
        <ProfileEditButton>
          <Button onClick={onEditClick} styleType='secondary'>
            <Icon name='pencil' />
            Edit
          </Button>
        </ProfileEditButton>
      )}
    </ProfilesContent>
  </ProfilesContainer>
);

export default Profiles;
