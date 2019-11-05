import React, { SFC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { JSONSchema6Definition } from 'json-schema';
import Form, { ObjectFieldTemplateProps } from 'react-jsonschema-form';
import { TypeaheadField } from 'react-jsonschema-form-extras/lib/TypeaheadField';
import ReactDatePicker from 'react-jsonschema-form-extras/lib/ReactDatePicker';
import 'react-day-picker/lib/style.css';

import { DeskproAdminTheme } from '../Theme';
import { dpstyle, JsonFormStyle } from '../Styled';
import { P1, H2 } from '../Typography';
import {
  SearchComponent,
  ButtonComponent,
  CheckboxWidget
} from './JsonSchemaFormWidgets';

export interface ISchemaPropertyType {
  [key: string]: JSONSchema6Definition;
}

export interface ISchemaType {
  title: string;
  description: string;
  type:
    | 'string'
    | 'number'
    | 'integer'
    | 'boolean'
    | 'object'
    | 'array'
    | 'null'
    | 'any';
  properties: ISchemaPropertyType;
}

export interface IProps {
  schema: ISchemaType;
  uiSchema: object;
  formData?: object;
  widgets?: object;
}

export const widgets = {
  searchWidget: SearchComponent,
  buttonWidget: ButtonComponent,
  checkboxWidget: CheckboxWidget
};

export const ObjectFieldTemplate = (props: ObjectFieldTemplateProps) => {
  return (
    <JsonFormStyle key={props.title}>
      <H2 style={{ padding: 10 }}>{props.title}</H2>
      <P1 style={{ padding: 10 }}>{props.description}</P1>
      {props.properties.map((element, index) => (
        <div key={index} style={{ padding: 10 }}>
          {element.content}
        </div>
      ))}
    </JsonFormStyle>
  );
};

const StyledForm = styled(dpstyle.div)`
  border: solid 1px ${props => props.theme.staticColour};
  padding: 4px 10px;
  .control-label {
    display: none;
  }
  .panel-danger {
    border: solid 1px ${props => props.theme.greyDark};
    padding: 4px 10px;
    color: #fff;
    background: ${props => props.theme.warningColour};
    font-family: ${props => props.theme.mainFont};
  }
`;
const JsonSchemaForm: SFC<IProps> = ({ schema, uiSchema, formData }) => {
  const onSubmit = ({ _formData }: any) => false;
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <StyledForm>
        <Form
          schema={schema}
          uiSchema={uiSchema}
          widgets={widgets}
          formData={formData}
          onSubmit={onSubmit}
          fields={{ typeahead: TypeaheadField, rdp: ReactDatePicker }}
          children={<br />}
        />
      </StyledForm>
    </ThemeProvider>
  );
};

export default JsonSchemaForm;
