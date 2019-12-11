import React, { FC } from 'react';
import styled from 'styled-components';
import SingleSelect from '../../../components/SelectComponents/SingleSelect';
import SettingsHeader from '../../../components/SettingsHeader';
import SettingsSection from '../../../components/SettingsSection';
import Button from '../../../components/Button';
import AgentSecurity from './Sections/AgentSecurity';
import AdminSecurity from './Sections/AdminSecurity';
import AgentNotifications from './Sections/AgentNotifications';
import KeyboardShortcuts from './Sections/KeyboardShortcuts';

interface IProps {
  path: string;
}

const ColsSpread = styled.div`
  display:grid;
  grid-auto-flow: column;
  grid-template-columns: max-content;
  justify-content: space-between;
  align-items: center;
  padding-top:15px;
  padding-bottom:15px;
`;

const Settings: FC<IProps> = () => {

  return (
    <>
      <SettingsHeader>
        <SingleSelect
          type='large'
          options={[{
            value: '/agent/setting',
            label: 'Agent Settings',
          }]}
          selectedOption={{
            value: '/agent/setting',
            label: 'Agent Settings',
          }}
          selectOption={() => true}
        />
      </SettingsHeader>
      <AgentSecurity />
      <AdminSecurity />
      <AgentNotifications />
      <KeyboardShortcuts />
      <SettingsSection>
        <ColsSpread>
          <Button styleType='primary'>Save</Button>
          <Button styleType='secondary'>Discard Changes</Button>
        </ColsSpread>
      </SettingsSection>
    </>
  );
};

export default Settings;
