import React, { useState } from 'react';
import { mount, shallow } from '../../../test/enzyme';
import AdditonalTab, { IProps } from './AdditonalTab';
import { ITabsProps } from '../../../resources/interfaces';

describe('TabBar', () => {
  let props: IProps;
  let mountedAdditonalTab: any;

  const AdditonalTabComponent: React.FC<IProps> = _props => {
    const [dropdownValue, setDropdownValue] = useState(null);
    function handleMoreTab(val: ITabsProps) {
      setDropdownValue(val);
    }
    return (
      <AdditonalTab
        {...props}
        handle={handleMoreTab}
        selectedTabValue={dropdownValue}
      />
    );
  };

  const wrapper = (bShallow: boolean) => {
    if (!mountedAdditonalTab) {
      mountedAdditonalTab = bShallow
        ? shallow(<AdditonalTabComponent {...props} />)
        : mount(<AdditonalTabComponent {...props} />);
    }
    return mountedAdditonalTab;
  };

  const TabItems = [
    { label: 'admin.tabbar.bar1' },
    { label: 'admin.tabbar.bar2' },
    { label: 'admin.tabbar.bar3' }
  ];
  beforeEach(() => {
    props = {
      tabItems: TabItems,
      label: 'More'
    };
    mountedAdditonalTab = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
