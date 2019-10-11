# Table

This component renders an table populated by JSON data

# Table Component Contract

* it has Props of:
	columns?: array of ITableColumns
	tableData: array of JSON objects to be displayed as a table
* it has State:
	tableData: array of JSON objects to be displayed as a table
* it always renders a <div> element, containing the rest of the component
* if tableData is defined, within the <div> it shows a <JsonTable> component (from ts-react-json-table)

TODO

* sorting
* search
*
*
*