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
import InlineEditGroup from './components/InlineEditGroup';
import HeaderMediumCard from './components/HeaderMediumCard';

// Common components
import TabbedFieldGroup from '../TabbedFieldGroup';

export const GenericFormComponent = (props: any) => {
  switch (props.type) {
    case 'tabs_section':
      return (
        <div style={{ position: 'relative', maxWidth: 765, marginBottom: 24, borderBottom: '1px solid #E8EBEE' }}>
          <TabbedFieldGroup {...props} />
        </div>
      );
    case 'feature_section':
      return <FeatureSection {...props} />;
    case 'page_section':
      return <PageSection {...props} />;
    case 'group':
      return <ElementGroup {...props} />;
    case 'inline_edit_group':
      return <InlineEditGroup {...props} />;
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
      return <SettingsData {...props.options} />;
    case 'code':
      return <CodeSection {...props} />;
    case 'field':
      throw Error('Fields must be in a container');
    case 'header-medium-card':
      return <HeaderMediumCard {...props}/>;
    default:
      return null;
  }
};
