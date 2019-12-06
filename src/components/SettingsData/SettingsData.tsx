import React from 'react';
import {
  HeaderCard,
  HeaderMediumCard,
  SettingInfo,
  SettingInfoInUse,
  FeatureBilling
} from './Helpers';

interface IProps {
  type: string;
  props?: any;
}
const SettingsData: React.SFC<IProps> = ({ type, props }) => {
  const [closed, setClose] = React.useState(false);
  switch (type) {
    case 'header-card':
      return (
        <div style={{ height: 167, maxWidth: 974 }}>
          <HeaderCard />
        </div>
      );
    case 'header-medium-card':
      return (
        <div style={{ height: 167, maxWidth: 728 }}>
          <HeaderMediumCard />
        </div>
      );
    case 'setting-info':
      return (
        <div style={{ height: 134, maxWidth: 688 }}>
          <SettingInfo onClose={setClose} closed={closed}/>
        </div>
      );
    case 'setting-info-inUse':
      return (
        <div style={{ height: 152, maxWidth: 974 }}>
          <SettingInfoInUse />
        </div>
      );
    case 'feature-billing':
      return (
        <div style={{ height: 80, maxWidth: 722 }}>
          <FeatureBilling />
        </div>
      );
    default:
      return null;
  }
};

export default SettingsData;
