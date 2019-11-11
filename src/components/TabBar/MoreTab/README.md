# AdditonalTab Component Contract

- it has Props of:
  selectedTabValue?: ITabsProps; - selected Tab
  handle?: (val:ITabsProps)=>void; - Handle function of select additional tab
  label?: string; - Tab Label
  tabItems: {
    label?: string;
    messageId?: string;
  }[] - more Tabs in bar
- it has state of:
  opened: State of opened/closed tab
- it has hook function of:
  clickButton: set state dropdown content
- it always renders a <div>, <button> element, containing the rest of the component
