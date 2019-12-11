# InlileEdit Component Contract

* it has Props of:
	error: boolean - saving error flag
	inputValues: number[] - Array of saved values
	setValues: (vals: number[])=>void - Save Action
* it has State
  editing - editing state
  inlineValues - temp values
* it has Functions
  setInlineValues - change inlineValues
  setEdit - edit start/end function
* it always renders a <div> element, containing the rest of the component

