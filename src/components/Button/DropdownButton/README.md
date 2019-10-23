# DropdownButton Component Contract

- it has Props of:
  iconName?: string - Icon Name;
  containerClassName?: string - Class name for container;
  containerStyle?: Style for container;
  label: string - Button Label;
  items: Object Array - Dropdown Links;
  value?: any - value selected
  showClearButton?: boolean - Show clear button;
  onClear?: Clear value event;
  onSelect?: Select item event;
- it has openState: boolean - When Click, dropdown will be opened and closed by this state
- it renders a `<div>` element, `<svg>` element, `button` element
