import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import TableData from './TableData';
import { IntlProvider } from 'react-intl';
import {
  testTranslations,
  testTableData
} from '../../resources/constants/constants';
import { DeskproAdminTheme } from '../Theme';
import { getRandomItem } from '../../utils/getRandomColor';
import { ITableColor } from '../../resources/interfaces';

let backgroundCache = '';
let txtColor = '';

const getRandomColor = (): ITableColor => {
  let randomItem = getRandomItem();
  if (randomItem.background === backgroundCache) {
    randomItem = getRandomItem();
  }
  backgroundCache = randomItem.background;
  txtColor = randomItem.textColor;
  return randomItem;
};

const Container: React.SFC = props => (
  <IntlProvider locale='en' messages={testTranslations}>
    <ThemeProvider theme={DeskproAdminTheme}>
      <MemoryRouter>{props.children}</MemoryRouter>
    </ThemeProvider>
  </IntlProvider>
);

storiesOf('Table Data', module)
  .add('Avatar + text (avatar_text)', () => (
    <TableData type='avatar_text' props={testTableData[0]} />
  ))
  .add('Agent - long list 1 (multiple_agents)', () => (
    <TableData
      type='multiple_agents'
      props={{
        teams: testTableData.filter(item => !item.active),
        avatarProps: {
          size: 22
        }
      }}
    />
  ))
  .add('Agent - long list 2 (multiple_agents)', () => (
    <div style={{ width: 400 }}>
      <TableData
        type='multiple_agents'
        props={{
          teams: testTableData,
          avatarProps: {
            size: 26,
            showBoxShadow: false
          }
        }}
      />
    </div>
  ))
  .add('Agent - long list 3 (multiple_agents)', () => (
    <div style={{ width: 400 }}>
      <TableData
        type='multiple_agents'
        props={{
          teams: testTableData,
          viewMode: 'label',
          position: 'top',
          activeColor: '#54B162',
          avatarProps: {
            size: 26,
            showBoxShadow: false
          }
        }}
      />
    </div>
  ))
  .add('String (string)', () => (
    <TableData
      type='string'
      props={{ values: ['Sales', 'Support', 'Finance', 'HR'] }}
    />
  ))
  .add('Inline edit 1 (input)', () => (
    <TableData
      type='input'
      props={{ value: 'anthony.martin@example.or', onChange: () => false }}
    />
  ))
  .add('Inline edit 2 (input)', () => (
    <TableData
      type='input'
      props={{
        value: 'anthony.martin@example.or',
        onChange: () => false,
        hasError: true,
        errorMessage: 'Please enter an email in the format of example@mail only'
      }}
    />
  ))
  .add('Icon (icon)', () => (
    <TableData type='icon' props={{ iconName: 'question' }} />
  ))
  .add('Relationships 1 (relationships)', () => (
    <TableData
      type='relationships'
      props={{
        backgroundColor: '#F7F7F7',
        color: '#8B9293',
        iconName: 'admin',
        title: 'Numbers',
        values: [
          '+18883375776',
          '+33987679431',
          '+46101388661',
          '+552120420990',
          '+34518900655',
          '+351935556129',
          '+85258037211'
        ]
      }}
    />
  ))
  .add('Relationships 2 (relationships)', () => (
    <TableData
      type='relationships'
      props={{
        backgroundColor: '#F7F7F7',
        color: '#8B9293',
        iconName: 'admin',
        title: 'Numbers',
        text: 'Snippets',
        values: [
          '+18883375776',
          '+33987679431',
          '+46101388661',
          '+552120420990',
          '+34518900655',
          '+351935556129',
          '+85258037211'
        ]
      }}
    />
  ))
  .add('Duration (duration)', () => (
    <TableData type='duration' props={{ duration: '10s' }} />
  ))
  .add('Date and time (date_time)', () => (
    <TableData type='date_time' props={{ date_time: 'Mar 14, 2003' }} />
  ))
  .add('Binary yes/no (yes_no)', () => (
    <TableData type='yes_no' props={{ checked: true }} />
  ))
  .add('Link (link)', () => (
    <Container>
      <TableData
        type='link'
        props={{
          to: 'www.example.deskpro.com',
          title: 'www.example.deskpro.com'
        }}
      />
    </Container>
  ))
  .add('Enable/disable (toogle)', () => (
    <TableData type='toogle' props={{ checked: true, onChange: () => false }} />
  ))
  .add('Attachment (attachment)', () => (
    <TableData
      type='attachment'
      props={{
        id: 1,
        text: 'Attachment 1'
      }}
    />
  ))
  .add('Locale (locale)', () => (
    <TableData type='locale' props={{ code: 'GB' }} />
  ))
  .add('Team/Department/Agent (missed call assignment) (team)', () => (
    <TableData
      type='team'
      props={{
        avatar:
          'https://images.unsplash.com/photo-1513732822839-24f03a92f633?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        name: 'Vanessa Johnson'
      }}
    />
  ))
  .add('Teams 1 (multiple_teams)', () => {
    return (
      <TableData
        type='multiple_teams'
        props={{
          styleType: 'avatar',
          teams: testTableData.map(team => ({
            ...team,
            textBackgroundColor: getRandomColor().background,
            textColor: txtColor
          }))
        }}
      />
    );
  })
  .add('Teams 2 (multiple_teams)', () => {
    return (
      <TableData
        type='multiple_teams'
        props={{
          styleType: 'name-avatar',
          teams: testTableData.map(team => ({
            ...team,
            textBackgroundColor: getRandomColor().background,
            textColor: txtColor
          }))
        }}
      />
    );
  })
  .add('Teams 3 (multiple_teams)', () => {
    return (
      <TableData
        type='multiple_teams'
        props={{
          styleType: 'label',
          teams: testTableData.map(team => ({
            ...team,
            textBackgroundColor: getRandomColor().background,
            textColor: txtColor
          }))
        }}
      />
    );
  })
  .add('Count (count)', () => <TableData type='count' props={{ count: 79 }} />)
  .add('Id (id)', () => (
    <div style={{ position: 'relative', width: 50, height: 44 }}>
      <TableData type='id' props={{ id: 23578 }} />
    </div>
  ))
  .add('Timezone (timezone)', () => (
    <TableData type='timezone' props={{ timezone: 'UTC' }} />
  ))
  .add('Label (label)', () => (
    <div style={{ width: 90 }}>
      <TableData
        type='label'
        props={{
          label: 'Subscription',
          backgroundColor: '#3A8DDE',
          color: '#fff'
        }}
      />
    </div>
  ))
  .add('Currency (currency)', () => (
    <Container>
      <TableData type='currency' props={{ currency: 'GBP', value: 15000 }} />
    </Container>
  ))
  .add('Code (code)', () => (
    <Container>
      <TableData type='code' props={{ code: 'portal.error.400-desc' }} />
    </Container>
  ))
  .add('Colour (color)', () => (
    <Container>
      <TableData type='color' props={{ color: '#2EA4B5', label: 'Cyan' }} />
    </Container>
  ));
