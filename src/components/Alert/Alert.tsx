import React, { FC } from 'react';
import Markdown from 'react-markdown';

export type Props = {
  color: string;
};

const styles = {
  padding: '16px 0 16px 16px'
};

const colorStyles: { [key: string]: any } = {
  warning: {
    borderLeft: '4px solid #F8AF3C',
    backgroundColor: '#fffdf6',
    color: '#4C4F50'
  }
};

const Alert: FC<Props> = ({ children, color = 'warning' }) => {
  return (
    <div className='alert' style={{ ...styles, ...colorStyles[color] }}>
      <Markdown>{children}</Markdown>
    </div>
  );
};

export default Alert;
