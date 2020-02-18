# StringListSelector Component

- it has Props of:
  items: {id: number; value: string; selected: boolean}[] - string list includes its state - selected/unselected
  description: string - description of selector component
  onSelect: (item: {id: number; value: string: selected: boolean}) => void - action fired on `select` list items

- it always renders a <div> element, containing the rest of the component
