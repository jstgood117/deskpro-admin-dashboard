import React, { SFC, Fragment } from "react";

import { IconSetup, IconChannels, IconAgents, IconHelp } from "./SVG";

export interface IProps {
  name: string;
}

const Icon: SFC<IProps> = (props) => {
  switch (props.name) {
    case "admin.sidebar.setup":
      return <IconSetup />;
    case "admin.sidebar.channels":
      return <IconChannels />;
    case "admin.sidebar.agents":
      return <IconAgents />;
    case "sidebarHelp":
      return <IconHelp />;
    default:
      return <Fragment />;
  }
};

export default Icon;
