import * as React from 'react';
import styled from 'styled-components';

import { StdElementRow } from './StdElementRow';

const Group = styled.div`
  position: relative;
`;

const ElementGroup = (props: any) => {
  // If props doesn't exist or if it does, its set to true
  return (
    <Group>
      {props.elements.map((element: any, i: number) => (
        <StdElementRow {...element} key={i} formikProps={props.formikProps} />
      ))}
    </Group>
  );
};

export default ElementGroup;
