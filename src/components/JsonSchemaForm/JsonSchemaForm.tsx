import React, { SFC, useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { JSONSchema6Definition } from 'json-schema';
import Form, { ObjectFieldTemplateProps } from 'react-jsonschema-form';

import { DeskproAdminTheme } from '../Theme';
import { dpstyle, JsonFormStyle, SearchWrapper } from '../Styled';
import Button from '../Button';
import { P1, H2 } from '../Typography';
import SearchBox from '../SearchBox';

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
  properties: { [k: string]: JSONSchema6Definition };
}

export interface IProps {
  schema: ISchemaType;
  uiSchema: Object;
  formData?: Object;
  widgets?: Object;
}

export interface ICustomProps {
  value: string | number | string[];
  required: boolean;
  onChange: (arg0: string) => void;
}

export const SearchComponent: React.SFC<ICustomProps> = ({ onChange }) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    onChange(value);
  }, [value, onChange]);
  return (
    <SearchWrapper>
      <SearchBox
        value={value}
        placeholder="Search"
        onClear={e => {
          e.preventDefault();
          setValue('');
        }}
        onChange={event => {
          setValue(event.target.value);
        }}
      />
    </SearchWrapper>
  );
};

const StyledForm = styled(dpstyle.div)`
  border: solid 1px ${props => props.theme.staticColour};
  padding: 4px 10px;
  .control-label {
    display: none;
  }
`;
const JsonSchemaForm: SFC<IProps> = ({ schema, uiSchema, formData }) => {
  const onSubmit = ({ formData }: any) => {
    return console.log('form data are', formData);
  };
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <StyledForm>
        <Form
          schema={schema}
          uiSchema={uiSchema}
          formData={formData}
          onSubmit={onSubmit}
        >
          <div style={{ padding: 10 }}>
            <Button styleType="primary">Submit</Button>
          </div>
        </Form>
      </StyledForm>
    </ThemeProvider>
  );
};

export default JsonSchemaForm;
