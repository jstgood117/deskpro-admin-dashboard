import React from 'react';
import { storiesOf } from '@storybook/react';
import { IntlProvider } from 'react-intl';

import { testSidebarData, testTranslations } from '../../resources/constants';
import { PageContainer, SidebarContainer, BodyContainer } from './index';
import Sidebar from './Sidebar';
import { MemoryRouter } from 'react-router-dom';

storiesOf('Page',module)
	.add('Full Page Demo', () => (
        <div style={{"width": "90%", "height": "75vh", "position": "relative", "border": "2px solid #000"}}>
            <IntlProvider locale='en' messages={testTranslations}>
                <PageContainer>
                    <SidebarContainer>
                        <MemoryRouter>
                            <Sidebar data={testSidebarData} />
                        </MemoryRouter>
                    </SidebarContainer>
                    <BodyContainer>
                        <div style={{"height": "1500px", "margin": "25px"}}>
                            Demo demo demo
                        </div>
                    </BodyContainer>
                </PageContainer>
            </IntlProvider>
        </div>
	));