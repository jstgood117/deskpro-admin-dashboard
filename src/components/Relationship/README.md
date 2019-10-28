# Relationship Component Contract

* it has Props of:

  icon: string - icon name
  items: any[] - ist items
  color: string - color 
  backgroundColor: string - background color
  title: string - title of tootlip
  text?: string | number - text
  style?: CSSProperties - container styles
  className?: string - container class name
  renderItem: (item: any, index: number) => React.ReactElement - Render item function

* it has no State:
* it renders a <div> element
