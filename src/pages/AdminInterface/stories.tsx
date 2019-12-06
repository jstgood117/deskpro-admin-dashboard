import React from 'react';
import { storiesOf } from '@storybook/react';

import { testSidebarData } from '../../resources/constants/constants';
import { PageContainer, SidebarContainer, BodyContainer } from './layout';
import Sidebar from '../../components/Sidebar';
import { MemoryRouter } from 'react-router-dom';

storiesOf('AdminInterface/Page', module).add('Full Page Demo', () => (
  <div
    style={{
      width: '90%',
      height: '75vh',
      position: 'relative',
      border: '2px solid #000'
    }}
  >
    <PageContainer>
      <SidebarContainer>
        <MemoryRouter>
          <Sidebar data={testSidebarData} />
        </MemoryRouter>
      </SidebarContainer>
      <BodyContainer>
        <div style={{ height: '1500px', margin: '25px' }}>Demo demo demo</div>
      </BodyContainer>
    </PageContainer>
  </div>
));
