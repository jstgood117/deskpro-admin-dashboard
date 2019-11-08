# WithDropdownButton Component Contract

* it has Props of:
	children?: ReactNode - to be rendered within the button tag
  contentPosistion?: 'left' | 'right' - Dropdown position
  icon?: string - Button Icon
	handleSelect?: function callback when button is clicked or click select tag
	styleType: primary | secondary | tertiary - styles the button in different ways
	size: small | medium - size the button, default is medium
* it always renders a <button> element, containing the rest of the component
* button is clickable

