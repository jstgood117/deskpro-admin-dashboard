import React from 'react';
import { storiesOf } from '@storybook/react';

import ErrorBoard from './ErrorBoard';

storiesOf('ErrorBoard', module).add('default', () => (
  <div style={{ maxWidth: 668 }}>
    <ErrorBoard
      errors={[
        '/usr/share/nginx/deskpro/site41500/config_new/advanced/config.settings.php',
        '/usr/share/nginx/deskpro/site41500/config_new/advanced/config.env.php'
      ]}
    />
  </div>
));
