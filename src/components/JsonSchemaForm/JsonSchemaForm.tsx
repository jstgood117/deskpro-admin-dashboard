import React, { SFC, useState } from 'react';
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

export const SearchComponent: React.SFC = () => {
  const [value, setValue] = useState('');

  return (
    <SearchWrapper>
      <SearchBox
        value={value}
        placeholder="Search"
        onClear={() => setValue('')}
        onChange={event => setValue(event.target.value)}
      />
    </SearchWrapper>
  );
};

const StyledForm = styled(dpstyle.div)`
  border: solid 1px ${props => props.theme.activeColour};
  padding: 4px 10px;
  .control-label {
    display: none;
  }
`;
const JsonSchemaForm: SFC<IProps> = ({ schema, uiSchema, formData }) => {
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <StyledForm>
        <Form
          schema={schema}
          uiSchema={uiSchema}
          formData={formData}
          onSubmit={() => {
            console.log('submitted');
          }}
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
