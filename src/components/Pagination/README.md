# Pagination Component Contract

* it has Props of:
  totalRecords: number - the total number of records
  rowsPerPage: number - the number of rows per page
  currentPage: number - current page
  rowsPerPageOptions?: number[] - rows per page options
  containerStyle?: CSSProperties - container style
  containerClassName?: string - container class name
  onChangePage: (data: IPageChange) => void - callback fired when the current page is changed.
  onChangeRowsPerPage: (data: number) => void - callback fired when the rows per page is changed.

- it has State of:
  totalPage: number - the total page
  pages: array of IPageItem
  showRowsPerPage: boolean - to show or hide the rows per page options
  showPages: boolean - to show or hide the pages options

* it always renders a <div> element, <svg> element.