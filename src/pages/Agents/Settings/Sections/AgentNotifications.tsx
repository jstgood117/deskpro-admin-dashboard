import React, { FC } from 'react';
import styled from 'styled-components';
import { dpstyle } from '../../../../components/Styled';
import SettingsSection from '../../../../components/SettingsSection';
import SettingsSubSection from '../../../../components/SettingsSubSection';
import Button from '../../../../components/Button';
import TeamOverflow from '../../../../components/OverflowList/TeamOverflow';
import { testTableData } from '../../../../resources/constants/constants';

interface IProps {
}

const AgentsCol = styled.div`
  display:grid;
  grid-gap:5px;
  grid-auto-flow: column;
  grid-template-columns: max-content;
  justify-content: space-between;
  align-items: center;
  border-top:1px solid #E8EBEE;
  padding-top:15px;
`;

const PTag = styled(dpstyle.p)`
  color: ${props => props.theme.greyDark};
  font-size: 14px;
  line-height: 150%;
`;

const AgentNotification: FC<IProps> = () => {

  const [sectionToggle, setSectionToggle] = React.useState(true);

  const onToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSectionToggle(!sectionToggle);
  };

  return (
    <>
      <SettingsSection
        label='Agent Notifications'
        showToggle={true}
        isToggleActive={sectionToggle}
        onToggleChange={onToggleChange}
      >
        <SettingsSubSection>
          <PTag><strong>Email Subscriptons</strong></PTag>
          <PTag>
            Allow agents to subscribe to email notifications (the ones set in the Ticket Notifications and
            Other Notifications tabs in Agents, or in the agent’s preferences).
          </PTag>
          <PTag><strong>Agents</strong> (128 of 200)</PTag>
          <AgentsCol>
            <TeamOverflow
              max={6}
              items={testTableData.map(team => ({
                ...team,
                textColor: '#f9e6e1',
                textBackgroundColor: '#ec6c4e'
              }))}
              styleType='avatar'
            />
            <Button styleType='secondary'>Edit</Button>
          </AgentsCol>
        </SettingsSubSection>
      </SettingsSection>
    </>
  );
};

export default AgentNotification;
