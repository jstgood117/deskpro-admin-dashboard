import React from 'react';
import { storiesOf } from '@storybook/react';

import HelpDesk from './HelpDesk';
import Kayako from '../../assets/svg/helpdesk/kayako.svg';
import Zenddesk from '../../assets/svg/helpdesk/zendesk.svg';

storiesOf('HelpDesk', module)
  .add('Kayako', () => (
    <HelpDesk
      title='Kayako'
      logo={Kayako}
    />
  ))
  .add('Zendesk', () => (
    <HelpDesk
      title='Zendesk'
      logo={Zenddesk}
    />
  ));
