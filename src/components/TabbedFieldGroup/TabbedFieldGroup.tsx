import React from 'react';
import styled from 'styled-components';

import Toggle from '../Toggle';
import { CollapsedFieldGroup } from './CollapsedFieldGroup/CollapsedFieldGroup';
import { ExpandedFieldGroup } from './ExpandedFieldGroup/ExpandedFieldGroup';
import { SingleSelectFieldGroup } from './SingleSelectFieldGroup/SingleSelectFieldGroup';

const FieldGroupStyled = styled.div`
  position: relative;
  & input {
    margin-bottom: 12px;
  }
`;

const FieldGroupTitle = styled.p`
  font-family: Rubik;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #4c4f50;
`;

// Container for `Expand/Collapse` Brands toggle
const FieldGroupCollapse = styled.div<{ collapsed: boolean }>`
  position: absolute;
  right: 0;
  top: ${({ collapsed }) => (collapsed ? '40px' : 0)};
  width: 155px;
  & > p {
    padding-left: 16px;
    font-family: Rubik;
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #4c4f50;
    display: inline-block;
  }
`;

export const FormContainer = styled.div<{ collapsed?: boolean }>`
  padding-left: 36px;
  border-bottom: 1px solid #e8ebee;
  padding-bottom: 24px;
  max-width: ${({ collapsed }) => (collapsed ? 'calc(100% - 170px)' : '100%')};
  & label {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: #4c4f50;
    margin-bottom: 5px;
  }
`;

export interface ITab {
  title?: string;
  iconUrn?: string;
}

export interface IProps {
  allowExpanded?: boolean;
  elements?: any[];
  formikProps?: any;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  initialExpanded?: boolean;
  initialValues?: any;
  tabs?: ITab[];
  title?: string;
}

export interface IFieldGroupProps {
  elements: any[];
  formikProps?: any;
  setValues: (values: any) => void;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  tabs: ITab[];
  values: any;
}

// This methods returns true if provided elements contains only 1 input for every tab
const isSingleOptionElement = (tabs: ITab[], elements: any[]): boolean => {
  // Ensure that we'll be able to find element by tab index
  let result = tabs.length <= elements.length;
  for (const element of elements) {
    result =
      result &&
      Array.isArray(element.elements) &&
      element.elements.length === 1;
  }

  return result;
};

const getFieldGroup = (
  expanded: boolean,
  allowExpanded: boolean,
  fieldGroupProps: IFieldGroupProps
) => {
  if (expanded && allowExpanded) {
    return <ExpandedFieldGroup {...fieldGroupProps} />;
  }
  if (fieldGroupProps.tabs.length < 4) {
    return <CollapsedFieldGroup {...fieldGroupProps} />;
  }
  return <SingleSelectFieldGroup {...fieldGroupProps} />;
};

const getFieldGroupProps = (
  props: IProps,
  setValues: (values: any) => void,
  values: any
): IFieldGroupProps => ({
  elements: props.elements,
  formikProps: props.formikProps,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value
    });
    if (props.handleChange) {
      props.handleChange(e);
    }
  },
  setValues,
  tabs: props.tabs,
  values
});

const isPropsValid = (props: IProps) =>
  props.tabs && props.tabs.length && props.elements && props.elements.length;

const TabbedFieldGroup: React.FC<IProps> = props => {
  const [expanded, setExpanded] = React.useState(!!props.initialExpanded);
  const [values, setValues] = React.useState(props.initialValues || {});

  const onExpandToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpanded(e.target.checked);
  };

  // Ensure existance of tabs and form elements to display.
  if (!isPropsValid(props)) {
    return <FieldGroupStyled>No tabs provided</FieldGroupStyled>;
  }

  // Common props for all variants of TabbedFieldGroup
  const fieldGroupProps = getFieldGroupProps(props, setValues, values);
  const singleElement = isSingleOptionElement(props.tabs, props.elements);
  const allowExpanded = singleElement && props.allowExpanded;

  return (
    <FieldGroupStyled>
      {props.title && <FieldGroupTitle>{props.title}</FieldGroupTitle>}
      {allowExpanded && (
        <FieldGroupCollapse collapsed={!expanded}>
          <Toggle checked={expanded} onChange={onExpandToggle} size='medium' />
          <p>{expanded ? 'Collapse' : 'Expand'} Brands</p>
        </FieldGroupCollapse>
      )}
      {getFieldGroup(expanded, allowExpanded, fieldGroupProps)}
    </FieldGroupStyled>
  );
};

export default TabbedFieldGroup;
