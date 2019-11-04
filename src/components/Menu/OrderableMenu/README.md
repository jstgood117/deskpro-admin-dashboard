
# OrderableMenu Component Contract

- it has Props of:
  iconName?: string - Component Icon;
  label?: string - Component label;
  value?: Object - Selected value;
  onSelect?: (value: any) => void; - Select function;
  order?: (value: any) => void; - Order function when drag 
  menuItems?: Object[] - Menu List details;
  submenuPosition? string: sub menu position;
  initialList?: Object[] - Initial Menu List details;
  setChecked?: (value: any) => void; - Set toggle function when drag 
  checked? Object; Toggle state

- it always renders a

-  `<div>` element,

-  `<button>` element,

-  `<span>` element,

-  `<svg>` element,

-  `<button>` element,

-  `<input>` element,