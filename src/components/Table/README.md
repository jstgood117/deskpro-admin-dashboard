# Table

This component renders an table populated by JSON data

# Table Component Contract

* it has Props of:
	columns: array of objects to fit spec of material-table component
	tableData: array of objects to be displayed as a table
* it has State:
	tableData: array of JSON objects to be displayed as a table
* it always renders a <div> element, containing the rest of the component
* if columns & tableData are defined, within the <div> it shows a <MaterialTable> component 

# material-table component

https://material-table.com/#/docs/all-props