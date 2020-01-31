import React from 'react';

export interface IProps {
  title: string;
  description?: string;
}
export const HelpDesk: React.FC<IProps> = props => (
  <div>
    <div>{props.title}</div>
    <div>{props.description}</div>
  </div>
);

export default HelpDesk;
