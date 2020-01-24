import * as React from 'react';
import styled from 'styled-components';

import { IFieldGroupProps } from '../TabbedFieldGroup';
import { SettingsFormFactory } from '../../SettingsForm/SettingsFormFactory';
import Button from '../../Button';

// Hide fields' title once we have only one settings element
const ExpandedPanel = styled.div`
  & .element-details {
    display: none;
  }
  & > div:first-child .element-details {
    display: block;
    position: absolute;
    top: -34px;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: ${props => props.theme.staticColour};
    margin-top: 0;
  }
`;

const BrandRow = styled.div`
  display: flex;
  & p {
    display: inline-block;
    max-width: 186px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const BrandName = styled.div`
  height: 21px;
  min-width: 186px;
  & button p {
    max-width: 124px;
    white-space: nowrap;
    margin: 0;
  }
`;

const BrandForm = styled.div`
  flex-grow: 1;
`;

export const ExpandedFieldGroup: React.FC<IFieldGroupProps> = ({
  elements,
  formikProps,
  handleChange,
  tabs,
  values
}) => {
  return (
    <ExpandedPanel>
      {tabs.map((tab, index) => (
        <BrandRow key={index}>
          <BrandName>
            <Button styleType='imageButton' size='medium'>
              <img alt={`${tab.title} icon`} src={tab.iconUrn} />
              <p>{tab.title}</p>
            </Button>
          </BrandName>
          <BrandForm>
            {SettingsFormFactory(
              {
                elements: [elements[index]]
              },
              formikProps || {
                handleChange,
                values
              }
            )}
          </BrandForm>
        </BrandRow>
      ))}
    </ExpandedPanel>
  );
};
