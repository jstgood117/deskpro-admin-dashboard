import React, { FC } from 'react';

type AppErrorType = {
  message: string;
};

const AppError: FC<AppErrorType> =  ({
  message
}) => {

  return (
    <div>{message}</div>
  );
};

export default AppError;
