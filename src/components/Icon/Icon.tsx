import React, { SFC, Fragment } from 'react';

import {
  IconSetup,
  IconChannels,
  IconAgents,
  IconHelp,
  IconDropdownVector,
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
    case "sidebarHelp":
      return <IconHelp />;
    case "dropdownVector":
      return <IconDropdownVector />;
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
    default:
      return <Fragment />;
  }
};

export default Icon;