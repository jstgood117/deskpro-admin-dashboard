import * as React from 'react';

import { IFieldGroupProps, FormContainer } from '../TabbedFieldGroup';
import SingleSelect from '../../SelectComponents/SingleSelect';
import { SettingsFormFactory } from '../../SettingsForm/SettingsFormFactory';
import { selectStyles } from '../../SelectComponents/Helpers';

const bandSelectStyles = {
  control: (styles: React.CSSProperties) => ({
    ...selectStyles.control(styles),
    minWidth: '394px !important',
    marginBottom: 16
  })
};

export const SingleSelectFieldGroup: React.FC<IFieldGroupProps> = ({
  elements,
  formikProps,
  handleChange,
  tabs,
  values
}) => {
  const [selected, setSelected] = React.useState(0);
  const options = tabs.map((tab, index) => ({
    value: String(index),
    label: tab.title
  }));
  return (
    <React.Fragment>
      <SingleSelect
        options={options}
        selectOption={option => setSelected(Number(option.value))}
        selectedOption={options[0]}
        styles={bandSelectStyles}
        type='primary'
      />
      <FormContainer collapsed={true} key={selected}>
        {SettingsFormFactory(
          { elements: [elements[selected]] },
          formikProps || {
            handleChange,
            values
          }
        )}
      </FormContainer>
    </React.Fragment>
  );
};
