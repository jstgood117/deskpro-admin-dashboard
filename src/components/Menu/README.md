
# Menu Component Contract

- it has Props of:

  label?: string - Component label;
  menuItems?: Object[] - Menu List details;
  iconName?: string - Component Icon;
  value?: Object - Selected value;
  onSelect?: (value: any) => void; - Select function;

- it has value State. When click menu list, it will be updated.

- it always renders a

-  `<div>` element,

-  `<button>` element,

-  `<span>` element,

-  `<svg>` element,

-  `<button>` element,