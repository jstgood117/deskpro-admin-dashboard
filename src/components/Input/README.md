# Input Component Contract

- it has Props of:
  containerStyle?: container style
  containerClassName?: container class name
  ...props: input HTML attributes

- it has State of:
	hasValue: true if input has value
	hasFocus: true if input is focusing

- it always renders a <div> element, <input> element.