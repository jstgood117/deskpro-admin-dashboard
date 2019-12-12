import React from 'react';

import {
  MainElement,
} from './Components';

export const SettingsFormFactory = (uiSchema: any, formikProps: any) => {

  return uiSchema &&
    uiSchema.elements &&
    uiSchema.elements.map(
      (props: any, i: number) =>
        <MainElement key={i} {...props} formikProps={formikProps} />
    );
};
