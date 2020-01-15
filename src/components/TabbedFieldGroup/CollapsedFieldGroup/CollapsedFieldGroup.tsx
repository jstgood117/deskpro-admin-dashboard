import * as React from 'react';
import styled from 'styled-components';

import Button from '../../Button';
import { SettingsFormFactory } from '../../SettingsForm/SettingsFormFactory';
import { IFieldGroupProps, FormContainer } from '../TabbedFieldGroup';

const TabsContainer = styled.div`
  border-bottom: 1px solid #e8ebee;
  margin-bottom: 24px;
  & .selected-image-btn {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const CollapsedFieldGroup: React.FC<IFieldGroupProps> = ({
  elements,
  formikProps,
  handleChange,
  values,
  tabs
}) => {
  const [selected, setSelected] = React.useState(0);
  return (
    <React.Fragment>
      <TabsContainer>
        {tabs.map((tab, index) => (
          <Button
            styleType='imageButton'
            key={index}
            onClick={() => {
              setSelected(index);
            }}
            size='medium'
            imageBtnSelected={selected === index}
          >
            {tab.iconUrn && <img src={tab.iconUrn} alt={`${tab.title} icon`} />}
            {tab.title}
          </Button>
        ))}
      </TabsContainer>
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
