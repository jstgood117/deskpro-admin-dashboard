import React from 'react';
import {
  HeaderCard,
  HeaderMediumCard,
  SettingInfo,
  FeatureBilling
} from './Helpers';
import { ReferencePanel } from './ReferencePanel';
import { StyledText } from './styles';

interface IProps {
  type: string;
  props?: any;
}
const SettingsData: React.FC<IProps> = ({ type, props }) => {
  switch (type) {
    case 'header-card':
      return <HeaderCard />;
    case 'header-medium-card':
      return <HeaderMediumCard />;
    case 'setting-info':
      return (
        <SettingInfo>
          <StyledText isTitle={false} style={{ opacity: 0.9 }}>
            {props.text}
          </StyledText>
        </SettingInfo>
      );
    case 'feature-billing':
      return <FeatureBilling />;
    case 'reference-code-panel':
      return <ReferencePanel />;
    default:
      return null;
  }
};

export default SettingsData;
