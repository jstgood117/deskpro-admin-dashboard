import React, { FC } from 'react';

interface IProps {
  path: string;
}

const ExamplePage: FC<IProps> = () => {

  return (
    <div>
      <p>Example page</p>
    </div>
  );
};

export default ExamplePage;
