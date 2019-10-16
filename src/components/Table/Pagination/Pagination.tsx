import React, { SFC } from "react";
import styled from 'styled-components';

const PaginationStyled = styled.div`
`

interface IProps {
  pageIndex: any,
  pageCount: any,
  pageSize: any,
  pageOptions: any,
  canPreviousPage: any,
  canNextPage: any,
  gotoPage: any,
  previousPage: any,
  nextPage: any,
  setPageSize: any,
}

const Pagination: SFC<IProps> = ({pageIndex, pageCount, pageSize, pageOptions, canPreviousPage, canNextPage, gotoPage, previousPage, nextPage, setPageSize}) => (
  <PaginationStyled>
    <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
      {"<<"}
    </button>{" "}
    <button onClick={() => previousPage()} disabled={!canPreviousPage}>
      {"<"}
    </button>{" "}
    <button onClick={() => nextPage()} disabled={!canNextPage}>
      {">"}
    </button>{" "}
    <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
      {">>"}
    </button>{" "}
    <span>
      Page{" "}
      <strong>
        {pageIndex + 1} of {pageOptions.length}
      </strong>{" "}
    </span>
    <span>
      | Go to page:{" "}
      <input
        type="number"
        defaultValue={pageIndex + 1}
        onChange={e => {
          const page = e.target.value ? Number(e.target.value) - 1 : 0;
          gotoPage(page);
        }}
        style={{ width: "100px" }}
      />
    </span>{" "}
    <select
      value={pageSize}
      onChange={e => {
        setPageSize(Number(e.target.value));
      }}
    >
      {[10, 20, 30, 40, 50].map(pageSize => (
        <option key={pageSize} value={pageSize}>
          Show {pageSize}
        </option>
      ))}
    </select>
  </PaginationStyled>
);

export default Pagination;