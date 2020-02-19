import React, { useState } from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';
import { getColorByChar } from '../../utils/getRandomColor';
import Button from '../Button';
import Icon from '../Icon';
import Drawer from '../Drawer';

import AgentSelector from '../AgentSelector';

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

interface IProps {
  editable?: boolean;
  emptyText?: string;
  onEditClick?: () => void;
  profiles?: {
    id: string;
    name: string;
    avatar?: string;
  }[];
  selected?: {
    [id: string]: boolean;
  };
  restricted?: {
    [id: string]: boolean;
  };
  title: string;
  formikProps: any;
}

const Profiles: React.FC<IProps> = ({
  editable,
  emptyText,
  onEditClick,
  profiles,
  selected,
  restricted,
  title,
  formikProps
}) => {

  const [open, setOpen] = useState(false);
  const [selectedAgents, setSelectedAgents] = useState(selected);

  const selectedProfiles = profiles.filter(
    profile =>
      (selected && selected[profile.id]) || (restricted && restricted[profile.id])
  );

  const handleEditClick = () => {
    setSelectedAgents(selected);
    setOpen(true);
    onEditClick();
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const onSaveClick = () => {
    formikProps.setFieldValue('selected', selectedAgents);
    setOpen(false);
  };

  const onCancelClick = () => {
    setOpen(false);
  };

  return (
    <div className='profiles'>
      <ProfilesTitle>
        {title}
        {!!(selectedProfiles && selectedProfiles.length) && (
          <ProfileTitleNotice>
            ({selectedProfiles.length} of {profiles.length})
        </ProfileTitleNotice>
        )}
      </ProfilesTitle>
      <ProfilesContent>
        {!(selectedProfiles && selectedProfiles.length) && (
          <ProfileMoreNotice>No profiles</ProfileMoreNotice>
        )}
        {!!(selectedProfiles && selectedProfiles.length) &&
          selectedProfiles.slice(0, 6).map((profile, index) => {
            const colors = getColorByChar(profile.name[0]);
            return (
              <ProfileAvatar key={index}>
                <Avatar
                  content={profile.avatar || profile.name}
                  textBackgroundColor={colors.background}
                  textColor={colors.textColor}
                  size={36}
                  textSize={32}
                  type={profile.avatar ? 'image' : 'text'}
                />
              </ProfileAvatar>
            );
          })}
        {selectedProfiles && selectedProfiles.length > 6 && (
          <ProfileMoreNotice>+ {selectedProfiles.length - 6}</ProfileMoreNotice>
        )}
        {editable && onEditClick && (
          <ProfileEditButton>
            <Button onClick={handleEditClick} styleType='secondary'>
              <Icon name='pencil' />
              Edit
          </Button>
          </ProfileEditButton>
        )}
      </ProfilesContent>

      <Drawer open={open} onClose={closeDrawer}>
        <AgentSelector
          agents={profiles}
          title='Agent selector'
          description='Select agents to enable keyboard shortcut. Incomplete info.'
          selected={selectedAgents}
          restricted={restricted}
          onSave={onSaveClick}
          onCancel={onCancelClick}
          onSelect={setSelectedAgents}
        />
      </Drawer>
    </div>
  );
};

export default Profiles;
