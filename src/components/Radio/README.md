# Radio Component Contract

* it has Props of:
  className?: string; - element class name
  setOption: (val: string | number | string[]) => void; - Set Option value
  option: string | number | string[]; - option
  value: string | number | string[]; - radio value
  containerStyle?: CSSProperties; - styles

- it has no State

* it always renders a <div> element, <input> element.