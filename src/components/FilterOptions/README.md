# FilterOptions Component Contract

* it has Props of:
	properties: IItemType[] - property items
	options: IItemType[] - option items
	placeholder?: string - Placeholder text
* it has State
  currentProperty - selected Property
  currentOption - selected Option
  containProperties - filtered properties
  containOptions - filtered options
* it has Functions
  setProperty - set selected property
  setOption - set selected option
  setProperties - filter properties
  setOptions - filter options
* it always renders a <div> element, containing the rest of the component

