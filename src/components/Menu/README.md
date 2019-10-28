
# Menu Component Contract

- it has Props of:

  label?: string - Component label;
  items?: Object - Menu List details;
  iconName?: string - Component Icon;
  value?: any - Selected value;
  onSelect?: (value: any) => void; - Select function;

- items has Props of:

  name?: string - Menu List label
  subItems?: Object[] - Sub List
  icon?: string - Menu List icon

- it has value State. When click menu list, it will be updated.

- it always renders a

-  `<div>` element,

-  `<button>` element,

-  `<span>` element,

-  `<svg>` element,

-  `<button>` element,