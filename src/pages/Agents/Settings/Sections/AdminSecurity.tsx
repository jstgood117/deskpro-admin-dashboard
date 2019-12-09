import React, { FC } from 'react';
import styled from 'styled-components';
import { dpstyle } from '../../../../components/Styled';
import Radio from '../../../../components/Radio';
import Toggle from '../../../../components/Toggle';
import SingleSelect from '../../../../components/SelectComponents/SingleSelect';
import SettingsSection from '../../../../components/SettingsSection';
import SettingsSubSection from '../../../../components/SettingsSubSection';
import Button from '../../../../components/Button';

type WhitelistIPs = {
  value: string;
  label:string;
};

const Cols = styled.div`
  display:grid;
  grid-gap:5px;
  grid-auto-flow: column;
  grid-template-columns: min-content;
`;

const PTag = styled(dpstyle.p)`
  color: ${props => props.theme.greyDark};
  font-size: 14px;
  line-height: 150%;
`;

const RadioLabel = styled(dpstyle.p)`
  color: ${props => props.theme.greyDark};
  font-size: 14px;
  margin:0;
`;

const WhitelistIPs = styled(dpstyle.div)`

  margin-top:10px;

  > div {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color:#4C4F50;
    padding-top:10px;
    padding-bottom:10px;
    color:#4C4F50;
  }

  div:first-child {
    font-weight: 500;
    border-bottom:1px solid #EFF0F0;
    display:flex;
    justify-content:space-between;
  }
`;

const AdminSecurity: FC<any> = () => {

  const [sectionToggle, setSectionToggle] = React.useState(true);
  const [idleToggle, setIdleToggle] = React.useState(true);
  const [screenOption, setScreenOption] = React.useState('');
  const [whitelistIPs, setWhitelistIPs] = React.useState({
    value: 'ip-validation',
    label: 'Whitelist IPs or agent confirmation',
  });

  const onToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSectionToggle(!sectionToggle);
  };

  const onIdleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdleToggle(!idleToggle);
  };

  return (
    <>
      <SettingsSection
        label='Admin Security Settings'
        showToggle={true}
        isToggleActive={sectionToggle}
        onToggleChange={onToggleChange}
      >
        <SettingsSubSection>
          <PTag><strong>Admin Authenication</strong></PTag>
          <PTag>
            Administrators will be required to authenticate themselves when accessing the admin area of
            Deskpro.
          </PTag>
          <Cols>
            <Toggle
              size='medium'
              style={{'marginTop':'15px'}}
              checked={idleToggle}
              onChange={onIdleToggleChange}
            />
            <div>
              <PTag><strong>Idle timeout</strong></PTag>
              <PTag>
                Enable this to log out who are idle. Agents will be logged
                out from the agent interface when agent timeout elapses.
              </PTag>
              <PTag><strong>Agent Timeout</strong></PTag>
              <Cols>
                <SingleSelect
                  type='medium'
                  options={[{
                    value: '1',
                    label: '1',
                  },{
                    value: '2',
                    label: '2',
                  },{
                    value: '3',
                    label: '3',
                  }]}
                  selectedOption={{
                    value: '1',
                    label: '1',
                  }}
                  selectOption={() => true}
                />

                <SingleSelect
                  type='medium'
                  options={[{
                    value: 'mins',
                    label: 'Mins',
                  },{
                    value: 'hours',
                    label: 'Hours',
                  }]}
                  selectedOption={{
                    value: 'mins',
                    label: 'Mins',
                  }}
                  selectOption={() => true}
                />
              </Cols>
            </div>
          </Cols>
          <PTag>
            Send idle agent who have been timed out to
          </PTag>

          <Cols style={{'marginBottom':10}}>
            <Radio
              setOption={(val: any) => {
                setScreenOption(val);
              }}
              value='lock'
              id='lock'
              option={screenOption}
            />
            <RadioLabel>Lock Screen</RadioLabel>
          </Cols>

          <Cols style={{'marginBottom':20}}>
            <Radio
              setOption={(val: any) => {
                setScreenOption(val);
              }}
              value='login'
              id='login'
              option={screenOption}
            />
            <RadioLabel>Login Screen</RadioLabel>
          </Cols>
          <PTag><strong>Agent IP Whitelisting</strong></PTag>
          <PTag>
            When enabled, agents can only log in from IP addresses that have been marked as trusted.
            When someone attempts to log in from an untrusted IP address, an email alert is sent.
          </PTag>
          <SingleSelect
            type='medium'
            options={[{
              value: 'no-ip-validation',
              label: 'No IP Validation',
            }, {
              value: 'ip-validation',
              label: 'Whitelist IPs or agent confirmation',
            }]}
            selectedOption={whitelistIPs}
            selectOption={(value: WhitelistIPs) => {
              setWhitelistIPs(value);
            }}
          />
          { whitelistIPs.value === 'ip-validation' && (
            <WhitelistIPs>
              <div>
                <span>Whitelisted IPs</span>
                <span>4</span>
              </div>
              <div>217.138.85.212</div>
              <div>267.138.85.450</div>
              <div>647.138.85.211</div>
              <div>345.138.85.2134</div>
              <Button styleType='secondary'>Add</Button>
            </WhitelistIPs>
          )}
        </SettingsSubSection>
      </SettingsSection>
    </>
  );
};

export default AdminSecurity;
