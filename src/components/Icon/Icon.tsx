import React, { SFC, Fragment } from "react";

import { IconSetup, IconChannels, IconAgents, IconHelp } from "./SVG";

export interface IProps {
  name: string;
}

const Icon: SFC<IProps> = (props) => {
  switch (props.name) {
    case "sidebarSetup":
      return <IconSetup />;
    case "sidebarChannels":
      return <IconChannels />;
    case "sidebarAgents":
      return <IconAgents />;
    case "sidebarHelp":
      return <IconHelp />;
    default:
      return <Fragment />;
  }
};

export default Icon;
