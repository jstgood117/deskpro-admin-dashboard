import React from 'react';

// Form related components
import Label from './components/Label';
import FeatureSection from './components/FeatureSection';
import PageSection from './components/PageSection';
import ElementGroup from './components/ElementGroup';
import VertElementGroup from './components/VertElementGroup';
import HorizontalElementGroup from './components/HorizontalElementGroup';
import AlertSection from './components/AlertSection';
import SettingsData from './components/SettingsData';
import CodeSection from './components/CodeSection';
import ButtonSection from './components/ButtonSection';
import DrawerSection from './components/DrawerSection';
import AgentSelectorSection from './components/AgentSelectorSection';

// Common components
import TabbedFieldGroup from '../TabbedFieldGroup';

export const GenericFormComponent = (props: any) => {
  switch (props.type) {
    case 'tabs_section':
      return (
        <div style={{ position: 'relative', maxWidth: 685 }}>
          <TabbedFieldGroup {...props} />
        </div>
      );
    case 'feature_section':
      return <FeatureSection {...props} />;
    case 'page_section':
      return <PageSection {...props} />;
    case 'group':
      return <ElementGroup {...props} />;
    case 'vertical_group':
      return <VertElementGroup {...props} />;
    case 'horizontal_group':
      return <HorizontalElementGroup {...props} />;
    case 'label':
      return <Label {...props} />;
    case 'button':
      return <ButtonSection {...props} />;
    case 'alert':
      return <AlertSection {...props} />;
    case 'settings-data':
      return (
        <SettingsData {...props.options} formikProps={props.formikProps} />
      );
    case 'drawer':
      return <DrawerSection {...props} />;
    case 'agent-selector':
      return <AgentSelectorSection {...props} />;
    case 'code':
      return <CodeSection {...props} />;
    case 'field':
      throw Error('Fields must be in a container');
    default:
      return null;
  }
};
