import * as React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import { StdElementRow } from './StdElementRow';

const Group = styled.div`
  position: relative;

  &.hidden {
    display: none;
  }
`;

const ElementGroup = (props: any) => {
  // If props doesn't exist or if it does, its set to true
  const enabled =
    !props.showOn || props.formikProps.values[props.showOn] === true;
  return (
    <Group className={classNames({ hidden: !enabled })}>
      {props.elements.map((element: any, i: number) => (
        <StdElementRow {...element} key={i} formikProps={props.formikProps} />
      ))}
    </Group>
  );
};

export default ElementGroup;
