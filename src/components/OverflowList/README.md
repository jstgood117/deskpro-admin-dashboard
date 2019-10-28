# OverflowList Component Contract

* it has Props of:

  max: number - max item to display
  items: any[] - list items
  viewMode?: 'text' | 'label' - View Mode
  overflowStyle?: CSSProperties - Overflow styles
  overflowClass?: string - Overflow class
  containerStyle?: CSSProperties - Container styles
  containerClass?: string - Container class
  textStyle?: CSSProperties - Text styles
  renderItem: (item: any, index: number) => React.ReactElement - Render item function

* it has State of:

  expand: To expand lists
* it renders a <div> element

