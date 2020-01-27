import * as React from 'react';
import styled from 'styled-components';

import FieldContainer from './FieldContainer';
import { GenericFormComponent } from '../GenericFormComponent';
import { generateElementInfo } from './helpers/generateElementInfo';
import { generateTitleAndDescription } from './helpers/generateTitleAndDescription';

const Group = styled.div`
  position: relative;
  padding-left: 45px;
  & .hidden {
    display: none;
  }
`;

const VertElementGroup: React.FC = (props: any) => {
  // If props doesn't exist or if it does, its set to true
  const enabled =
    !props.showOn || props.formikProps.values[props.showOn] === true;

  return (
    <Group>
      {generateTitleAndDescription('group-details', props)}
      {generateElementInfo(props)}
      {enabled &&
        props.elements.map((element: any, i: number) =>
          element.type === 'field' ? (
            <FieldContainer
              {...element}
              key={i}
              formikProps={props.formikProps}
            />
          ) : (
            <GenericFormComponent
              {...element}
              key={i}
              formikProps={props.formikProps}
            />
          )
        )}
    </Group>
  );
};

export default VertElementGroup;
