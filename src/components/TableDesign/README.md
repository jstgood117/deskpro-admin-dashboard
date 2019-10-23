# TabBar Component Contract

* it has Props of:
  - Table: table element props
  - TableHead: thead element props
  - TableRow: tr element props
  - TableCell:
    - container?: 'head' | 'body' - for thead or tbody
    - className?: string - th/td class
    - style?: css properties - CSSProperties;
    - onCellClick?: - cell click event
  - TableBody: tbody element props
* it has no State
* it always renders a <table> element