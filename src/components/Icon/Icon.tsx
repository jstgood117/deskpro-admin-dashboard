import React, { SFC, Fragment } from 'react';

import {
  IconSetup,
  IconChannels,
  IconAgents,
  IconHelp,
  IcondownVector,
  IconSearch,
  IconFilter,
  IconSort,
  IconGroup,
  IconView,
} from './SVG';

export interface IProps {
  name: string;
}

const Icon: SFC<IProps> = props => {
  switch (props.name) {
    case 'admin.sidebar.setup':
      return <IconSetup />;
    case 'admin.sidebar.channels':
      return <IconChannels />;
    case 'admin.sidebar.agents':
      return <IconAgents />;
    case 'admin.sidebar.help.helpCentre':
      return <IconHelp />;
    case 'downVector':
      return <IcondownVector />;
    case 'search':
      return <IconSearch />;
    case 'filter':
      return <IconFilter />;
    case 'sort':
      return <IconSort />;
    case 'group':
      return <IconGroup />;
    case 'view':
      return <IconView />;
    default:
      return <Fragment />;
  }
};

export default Icon;
