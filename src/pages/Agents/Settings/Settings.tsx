import React, { SFC } from 'react';

interface IProps {
  path: string;
}

const Settings: SFC<IProps> = ({ path }) => {
  return (
    <div>{path}</div>
  );
};

export default Settings;
