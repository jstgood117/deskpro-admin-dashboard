import React, { useState, useEffect, useRef } from 'react';
import Form, { ObjectFieldTemplateProps } from 'react-jsonschema-form';
import styled from 'styled-components';
import get from 'lodash/get';

import { IPropertySchema } from './interfaces';
import Input from '../Input';
import { Select, DropdownOption } from './Components';

const FormContainer = styled.div`
  border: 1px solid ${props => props.theme.greyLight};
  height: 26px;
  position: relative;
  justify-content: flex-start;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  width: 100%;
`;

const SelectContainer = styled.div`
  margin: 0 20px;
  margin-left: 0;
`;

const Template = (props: ObjectFieldTemplateProps) => {
  return props.properties.map(prop => (
    <React.Fragment key={prop.content.key}>{prop.content}</React.Fragment>
  ));
};

const CustomFieldTemplate = (props: any) => {
  const { errors, children } = props;
  return (
    <React.Fragment>
      {children}
      {errors}
    </React.Fragment>
  );
};

const InputWidget = (props: any) => {
  return (
    <Input
      type="text"
      style={{ height: 24 }}
      containerStyle={{ height: 26 }}
      value={props.value || ''}
      onChange={event => props.onChange(event.target.value)}
    />
  );
};

const SelectWidget = (props: any) => {
  const options = props.options.enumOptions;
  const valueOption =
    options.find((opt: any) => opt.value === props.value) || {};

  // Type of item: {label: string, id: string}
  return (
    <SelectContainer>
      <Select
        style={{ border: 0 }}
        position="right"
        items={options}
        value={valueOption.label || ''}
        placeholder={valueOption.label || ''}
        renderItem={item => (
          <DropdownOption
            onClick={() => props.onChange(item.value)}
            key={item.value}
          >
            {item.label}
          </DropdownOption>
        )}
      />
    </SelectContainer>
  );
};

const widgets = {
  input: InputWidget,
  array: SelectWidget
};

interface IProps {
  property: IPropertySchema;
  value: any;
  onChangeValue: (value: any) => void;
}
const FormBuilder: React.FC<IProps> = ({ property, value, onChangeValue }) => {
  const prevProperty = useRef<IPropertySchema>();
  const [schema, setSchema] = useState(null);
  const [uiSchema, setUiSchema] = useState(null);
  const onChange = (form: any) => onChangeValue(form.formData);

  useEffect(() => {
    if (
      property &&
      get(prevProperty, 'current.propertyId') === property.propertyId
    ) {
      return;
    }
    prevProperty.current = { ...property };

    const type = property && property.type;
    switch (type) {
      case 'text':
        setSchema({
          type: 'string' as 'string'
        });
        setUiSchema({
          'ui:ObjectFieldTemplate': Template,
          'ui:widget': widgets.input
        });
        break;

      case 'select':
        const choices = get(property, 'options.choices', {});
        const enumOptions: string[] = [];
        const enumNames: string[] = [];
        Object.keys(choices).forEach(item => {
          enumOptions.push(item);
          enumNames.push(choices[item]);
        });

        setSchema({
          type: 'array' as 'array',
          items: {
            type: 'string',
            enum: enumOptions,
            enumNames: enumNames
          },
          uniqueItems: true
        });
        setUiSchema({
          'ui:ObjectFieldTemplate': Template,
          'ui:widget': widgets.array
        });
        break;

      default:
        break;
    }
  }, [property]);

  return (
    <FormContainer>
      {property && schema && uiSchema && (
        <Form
          widgets={widgets}
          schema={schema}
          uiSchema={uiSchema}
          formData={value}
          onChange={onChange}
          FieldTemplate={CustomFieldTemplate}
        >
          <div />
        </Form>
      )}
    </FormContainer>
  );
};

export default FormBuilder;