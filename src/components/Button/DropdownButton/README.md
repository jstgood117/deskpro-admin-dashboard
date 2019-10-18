# DropdownButton Component Contract

- it has Props of:
  iconName?: string - Icon Name;
  label: string - Button Label;
  items: Object Array - Dropdown Links;
  onClick?: (e: any) => void - Button Click event
- it has openState: boolean - When Click, dropdown will be opened and closed by this state
- it renders a `<div>` element, `<svg>` element
