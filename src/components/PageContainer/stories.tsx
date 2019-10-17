import React from 'react';
import { storiesOf } from '@storybook/react';

import PageContainer from './PageContainer';
import Sidebar from '../Sidebar';
import Body from '../Body';
import { testSidebarData } from '../../resources/constants';

storiesOf('Page Container', module)
  .add('default', () => <PageContainer>My Container</PageContainer>)
  .add('with sidebar', () => (
    <PageContainer>
      <Sidebar path="/" data={testSidebarData}></Sidebar>
    </PageContainer>
  ))
  .add('with sidebar and body', () => (
    <PageContainer>
      <Sidebar path="/" data={testSidebarData}></Sidebar>
      <Body>body</Body>
    </PageContainer>
  ));
