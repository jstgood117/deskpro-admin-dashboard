import React, { FC } from 'react';

export type Props = {
  message: string;
};

const AppError: FC<Props> =  ({
  message
}) => {

  return (
    <div>{message}</div>
  );
};

export default AppError;
