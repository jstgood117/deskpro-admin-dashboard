import React, { useState } from 'react';
import styled from 'styled-components';

import { P2, P3 } from '../../Typography';
import Input from '../../Input';
import Icon from '../../Icon';
import NameAndAvatar from '../../Avatar/NameAndAvatar';

const FormContainer = styled.div`
  width: 100%;
  height: 100%;

  .name .label {
    margin-bottom: 4px;
  }

  .agents {
    margin-top: 24px;
    .label-button {
      display: flex;
      justify-content: space-between;
      .button-group {
        display: flex;
        align-items: center;
        margin-right: 4px;
      }
    }
    .avatar-list {
      margin: 12px 0px 0px 11px;
    }
  }

  .links {
    margin-top: 16px;
  }
  .id {
    margin-top: 16px;
  }
`;

const StyledLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 33px;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom: 1px solid ${props => props.theme.greyLight};
  .icon-label {
    display: flex;
    align-items: center;
    .label {
      margin-left: 8px;
    }
  }
`;

const HelpButton = styled.button`
  background: ${props => props.theme.brandPrimary};
  border-radius: 50%;
  width: 48px;
  height: 49px;
  position: absolute;
  right: 24px;
  bottom: 94px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
  outline: none;
  cursor: pointer;
`;

const InputComponent: React.FC<{
  hasError?: boolean;
  showClear?: boolean;
  errorMessage?: string;
  inputType: 'primary' | 'secondary';
}> = ({ hasError, errorMessage, showClear, inputType }) => {
  const [value, setValue] = useState('Support UK');

  return (
    <Input
      value={value}
      errorMessage={errorMessage}
      hasError={hasError}
      onClear={() => setValue('')}
      showClear={showClear}
      inputType={inputType}
      onChange={(event: any) => setValue(event.target.value)}
    />
  );
};

const agents = [
  {
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    name: 'Aaron Wood'
  },
  {
    avatar: 'https://images.unsplash.com/photo-1513732822839-24f03a92f633?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    name: 'Anthony Martin'
  },
  {
    avatar: 'https://images.unsplash.com/photo-1542080681-b52d382432af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4000&q=80',
    name: 'Braydon Jackson'
  },
  {
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    name: 'Cynthia Clarke'
  },
  {
    avatar: 'https://images.unsplash.com/photo-1549459685-701565fe9ff1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=950&q=80',
    name: 'Ewald Rolfson'
  },
];

const links = [
  { image: 'clock', label: 'Triggers (10)' },
  { image: 'brand2', label: 'Auto attendants (4)' },
  { image: 'info', label: 'SLAs (8)' }
];

const EditAgentForm = () => {
  return (
    <FormContainer>
      <div className='name'>
        <P2 className='label'>Name</P2>
        <InputComponent inputType='primary' />
      </div>
      <div className='agents'>
        <div className='label-button'>
          <P2 className='label'>Agents</P2>
          <div className='button-group'>
            <Icon name='plus' />
            <P3>Add</P3>
          </div>
        </div>
        <div className='avatar-list'>
          {agents.map((agent, key) => (
            <NameAndAvatar
              key={key}
              avatar={agent.avatar}
              name={agent.name}
              containerStyle={{ marginBottom: '8px' }}
            />
          ))}
        </div>
        <div className='links'>
          <P2 className='label'>Links</P2>
          {links.map((link, key) => (
            <StyledLink key={key}>
              <div className='icon-label'>
                <Icon name={link.image} />
                <P2 className='label'>{link.label}</P2>
              </div>
              <Icon name='down' />
            </StyledLink>
          ))}
        </div>

        <div className='id'>
          <P3>ID 384728</P3>
        </div>
      </div>
      <HelpButton>
        <Icon name='question' />
      </HelpButton>

    </FormContainer>
  );
};

export default EditAgentForm;