import React, { SFC } from 'react';

type AppErrorType = {
  message: string;
};

const AppError: SFC<AppErrorType> =  ({
  message
}) => {

  return (
    <div>{message}</div>
  );
};

export default AppError;
