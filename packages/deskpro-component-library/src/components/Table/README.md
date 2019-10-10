# Table

This component renders an table populated by JSON data

# Table Component Contract

* it has Props of:
	columns?: array of ITableColumns
	tableData: array of JSON objects to be displayed as a table
	pageSize?: number of rows per page
* it has State:
	tableData: array of JSON objects to be displayed as a table
* it always renders a <div> element, containing the rest of the component
* if tableData is defined, within the <div> it shows a <MaterialTable> component (from ts-react-json-table)
* if there are more rows than pageSize, show only pageSize rows and render the pagination buttons

TODO

* sorting
* search
*
*
*