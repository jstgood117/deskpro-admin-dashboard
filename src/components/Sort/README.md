# Sort Component Contract

- it has Props of:
  items: ISortItem[] - Sort Items
  sortSelected: ISortItem | null : Sort selected
  onSelectSort: (item: ISortItem) => void - Update sort selected
- it has no State
- it renders a `<div>` element, `<svg>` element, `button` element