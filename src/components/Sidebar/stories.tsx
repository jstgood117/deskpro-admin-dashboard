import React from 'react';
import { storiesOf } from '@storybook/react';

import { testSidebarData } from '../../resources/constants/constants';
import Sidebar from './Sidebar';
import { MemoryRouter } from 'react-router-dom';

storiesOf('Page', module).add('Demo Sidebar', () => (
  <div style={{ width: '215px', height: '75vh', position: 'relative' }}>
    <MemoryRouter>
      <Sidebar data={testSidebarData} />
    </MemoryRouter>
  </div>
));
