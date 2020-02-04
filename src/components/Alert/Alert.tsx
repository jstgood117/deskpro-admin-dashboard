import React, { FC } from 'react';

export type Props = {
  color: string;
};

const styles = {
  padding: '16px 0 16px 16px'
};

const colorStyles: { [key: string]: any } = {
  warning: {
    borderLeft: '4px solid #F8AF3C',
    backgroundColor: '#FFF8E1',
    color: '#4C4F50'
  }
};

const Alert: FC<Props> = ({ children, color = 'warning' }) => {
  return (
    <div className='alert' style={{ ...styles, ...colorStyles[color] }}>
      {children}
    </div>
  );
};

export default Alert;
