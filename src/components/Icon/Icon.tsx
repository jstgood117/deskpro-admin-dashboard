import React, { SFC } from 'react';

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
  IconTableView,
  IconListView,
  IconMapView,
  IconPlus,
  IconQuestion,
  IconLoginLog,
  IconSettings,
  Illustration
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
    case "admin.sidebar.help.helpCentre":
      return <IconHelp />;
    case 'viewMode.table':
      return <IconTableView />;
    case 'viewMode.list':
      return <IconListView />;
    case 'viewMode.map':
      return <IconMapView />;
    case 'plus':
      return <IconPlus />;
    case 'question':
      return <IconQuestion />;
    case 'loginLog':
      return <IconLoginLog />;
    case 'settings':
      return <IconSettings />;
    case 'illustration':
      return <Illustration />;
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
      return <IconSetup />;
  }
};

export default Icon;