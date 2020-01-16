import React, { useState } from 'react';
import styled from 'styled-components';

import { DrawerHeader, DrawerBody, DrawerFooter } from '../DrawerStyles';
import Input from '../../Input';
import Icon from '../../Icon';
import NameAndAvatar from '../../Avatar/NameAndAvatar';
import Button from '../../Button';
import SingleSelect from '../../SelectComponents/SingleSelect';
import { dpstyle } from '../../Styled';

import { IOptions } from '../../SelectComponents/interfaces';

const StyledLabel = styled(dpstyle.div1)`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const FormContainer = styled.div`
  width: 100%;
  height: 100%;

  .agents-section {
    margin-top: 24px;

    .label-button {
      display: flex;
      justify-content: space-between;

      .text-only>button {
        border: none;
        background: none;
        font-size: 13px;
        padding: 0px;
        svg {
          width: 9px;
          height: 9px;
          padding-right: 4px;
        }
      }
    }

    .avatar-list {
      margin: 12px 0px 0px 11px;
      .name-avatar {
        height: 34px;
        margin-bottom: 6px;
        img {
          width: 18px;
          height: 18px;
        }
        div {
          font-weight: 600;
          font-size: 15px;
        }
      }
    }
  }

  .links-section {
    margin-top: 24px;
    &>div,
    .basic-single-select,
    .select__control {
      width: 100%;
    }
    .select__control {
      border: none;
      border-radius: 0px;
      border-bottom: 1px solid ${props => props.theme.greyLight};
      margin-bottom: 8px;
      :hover,
      :focus-within {
        border: none;
        border-radius: 0px;
        border-bottom: 1px solid ${props => props.theme.greyLight};
      }
    }
  }
  .id-section {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    line-height: 150%;
    color: #8B9293;
    margin-top: 16px;
    .title {
      font-size: 13px;
      margin-right: 16px;
    }
    .id {
      font-size: 15px;
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

const agents = [
  {
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    name: 'Aaron Wood'
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1513732822839-24f03a92f633?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    name: 'Anthony Martin'
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1542080681-b52d382432af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4000&q=80',
    name: 'Braydon Jackson'
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    name: 'Cynthia Clarke'
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1549459685-701565fe9ff1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=950&q=80',
    name: 'Ewald Rolfson'
  },
];

const links: IOptions[] = [
  { image: 'brand1', value: 'triggers', label: 'Triggers (10)' },
  { image: 'brand1', value: 'attendants', label: 'Auto attendants (4)' },
  { image: 'brand1', value: 'slas', label: 'SLAs (8)' }
];

const EditAgentForm = () => {
  const title = 'Support UK';
  const [value, setValue] = useState(title);
  const [selectedOption, selectOptions] = useState();

  return (
    <div>
      <DrawerHeader>
        {title}
      </DrawerHeader>
      <DrawerBody>
        <FormContainer>
          <div className='name-section'>
            <StyledLabel>Name</StyledLabel>
            <Input
              value={value}
              onClear={() => setValue('')}
              inputType={'primary'}
              onChange={(event: any) => setValue(event.target.value)}
            />
          </div>
          <div className='agents-section'>
            <div className='label-button'>
              <StyledLabel>Agents</StyledLabel>
              <Button
                styleType='secondary'
                size='small'
                className='text-only'
              >
                <Icon name='plus' />
                Add
              </Button>
            </div>
            <div className='avatar-list'>
              {agents.map((agent, key) => (
                <NameAndAvatar
                  key={key}
                  avatar={agent.avatar}
                  name={agent.name}
                  containerClassName={'name-avatar'}
                />
              ))}
            </div>
          </div>
          <div className='links-section'>
            <StyledLabel>Links</StyledLabel>
            {links.map((link, index) => (
              <SingleSelect
                key={index}
                options={links}
                type='withImage'
                selectOption={selectOptions}
                selectedOption={selectedOption}
                placeholder='Select Item'
              />
            ))}
          </div>
          <div className='id-section'>
            <span className='title'>ID</span>
            <span className='id'>384728</span>
          </div>
          <HelpButton>
            <Icon name='question' />
          </HelpButton>
        </FormContainer>
      </DrawerBody>
      <DrawerFooter>
        <Button styleType='primary' size='medium'>
          Save
        </Button>
        <Button styleType='secondary' size='medium'>
          Duplicate
        </Button>
        <Button styleType='secondary' size='medium'>
          Delete
        </Button>
      </DrawerFooter>
    </div >
  );
};

export default EditAgentForm;