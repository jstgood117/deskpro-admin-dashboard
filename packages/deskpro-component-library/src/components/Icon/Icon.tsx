import React, { SFC, Fragment } from "react";

import { IconSetup, IconChannels, IconAgents, IconHelp } from "./SVG";

export interface IProps {
  name: string;
}

const Icon: SFC<IProps> = (props) => {
  switch (props.name) {
    case "Setup":
      return <IconSetup />;
    case "Channels":
      return <IconChannels />;
    case "Agents":
      return <IconAgents />;
    case "Help":
      return <IconHelp />;
    default:
      return <Fragment />;
  }
};

export default Icon;
