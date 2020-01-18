import React from 'react';

// Form related components
import FeatureSection from './components/FeatureSection';
import PageSection from './components/PageSection';
import ElementGroup from './components/ElementGroup';
import VertElementGroup from './components/VertElementGroup';

// Common components
import TabbedFieldGroup from '../TabbedFieldGroup';

export const GenericFormComponent = (props: any) => {
  switch (props.type) {
    case 'tabs_section':
      return <TabbedFieldGroup {...props} />;
    case 'feature_section':
      return <FeatureSection {...props} />;
    case 'page_section':
      return <PageSection {...props} />;
    case 'group':
      return <ElementGroup {...props} />;
    case 'vertical_group':
      return <VertElementGroup {...props} />;
    case 'field':
      throw Error('Fields must be in a container');
    default:
      return null;
  }
};
