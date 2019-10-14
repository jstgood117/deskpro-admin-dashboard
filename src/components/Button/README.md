# Button Component Contract

* it has Props of:
	children?: ReactNode - to be rendered within the button tag
	onClick?: function callback when button is clicked
	styleType: primary | secondary | tertiary - styles the button in different ways
* it has no State
* it always renders a <button> element, containing the rest of the component
* button is clickable, and should call the onClick props function

