import React from 'react';

import { GenericFormComponent } from './GenericFormComponent';

export const SettingsFormFactory = (uiSchema: any, formikProps: any) => {
  return (
    uiSchema &&
    uiSchema.elements &&
    uiSchema.elements.map((props: any, i: number) => (
      <GenericFormComponent key={i} {...props} formikProps={formikProps} />
    ))
  );
};
