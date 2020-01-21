import React, { useState, useEffect, CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import Select from 'react-select';

import { dpstyle, FlowLayout } from '../Styled';
import Icon from '../Icon';
import { H6, P1 } from '../Typography';
import {
  selectStyles,
  IconOption,
  DropdownIndicator,
  PaginationSelectButton
} from '../SelectComponents/Helpers';
import { IOptions } from '../../types';

const Container = styled(FlowLayout)``;

const Button = styled(dpstyle.button)`
  width: 28px;
  height: 28px;
  border-radius: 3px;
  margin-left: 5px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  path {
    fill: ${props =>
      props.disabled ? props.theme.greyLight : props.theme.staticColour};
  }
  ${props =>
    !props.disabled &&
    css`
      &:hover {
        background: ${props.theme.hoverColour};
      }
    `}
`;

const Total = styled(H6)`
  color: ${props => props.theme.staticColour};
  font-weight: normal;
  margin-left: 10px;
`;

const Label = styled(P1)`
  color: ${props => props.theme.greyDark};
  margin-right: 10px;
`;

const Divider = styled.div`
  width: 20px;
`;

export interface IPageChange {
  currentPage: number;
  totalPages: number;
  start: number;
  end: number;
}

export interface IPageItem {
  start: number;
  end: number;
  page: number;
  label: string;
  value: number;
}

export interface IProps {
  totalRecords: number;
  rowsPerPage: number;
  currentPage: number;
  containerStyle?: CSSProperties;
  containerClassName?: string;
  onChangePage: (data: IPageChange) => void;
  onChangeRowsPerPage: (data: number) => void;
}

const Pagination: React.FC<IProps> = ({
  totalRecords,
  rowsPerPage = 10,
  currentPage = 1,
  containerStyle,
  containerClassName,
  onChangePage,
  onChangeRowsPerPage
}) => {
  const [totalPages, setTotalPages] = useState(0);
  const [pages, setPages] = useState<IPageItem[]>([]);
  const rowsPerPageOptions = [
    { value: 200, label: 200 },
    { value: 100, label: 100 },
    { value: 50, label: 50 },
    { value: 20, label: 20 },
    { value: 10, label: 10 }
  ];
  const updatePage = (page: number) => {
    const pageData = pages[page - 1];
    onChangePage({
      currentPage: page,
      totalPages,
      start: pageData.start,
      end: pageData.end
    });
  };

  const onNextClick = () => {
    const page = currentPage + 1;
    updatePage(page);
  };

  const onPrevClick = () => {
    const page = currentPage - 1;
    updatePage(page);
  };

  const formatNumber = (num: number) =>
    (num || 0).toLocaleString(undefined, { maximumFractionDigits: 0 });

  useEffect(() => {
    // Total Page
    const total = Math.floor((totalRecords + rowsPerPage - 1) / rowsPerPage);

    // Pages
    const _pages: IPageItem[] = [];
    let page = 1;
    while (page <= total) {
      const start = (page - 1) * rowsPerPage + 1;
      const end = Math.min(start + rowsPerPage - 1, totalRecords);
      const label = `${formatNumber(start)}-${formatNumber(end)}`;
      const value = start + end;
      _pages.push({
        start,
        end,
        page,
        label,
        value
      });
      page += 1;
    }

    // Update state
    setTotalPages(total);
    setPages(_pages);
  }, [totalRecords, rowsPerPage, currentPage]);
  return (
    <Container style={containerStyle} className={containerClassName}>
      <Label>Rows per page:</Label>
      <PaginationSelectButton
        minWidth={64}
        disabled={rowsPerPageOptions.length < 2 ? true : false}
      >
        <Select
          menuPlacement='auto'
          isSearchable={false}
          closeMenuOnSelect={true}
          isMulti={false}
          options={rowsPerPageOptions}
          isDisabled={rowsPerPageOptions.length < 2 ? true : false}
          styles={selectStyles}
          classNamePrefix='select'
          placeholder={null}
          hideSelectedOptions={false}
          onChange={(option: IOptions) => {
            onChangeRowsPerPage(Number(option.value));
          }}
          value={{ value: rowsPerPage, label: rowsPerPage }}
          defaultValue={{ value: rowsPerPage, label: rowsPerPage }}
          components={{
            ClearIndicator: false,
            DropdownIndicator,
            IndicatorSeparator: null,
            Option: IconOption
          }}
        />
      </PaginationSelectButton>
      <Divider />
      <PaginationSelectButton
        minWidth={94}
        disabled={pages.length < 2 ? true : false}
      >
        {pages.length > 0 && currentPage && (
          <Select
            isSearchable={false}
            menuPlacement='auto'
            closeMenuOnSelect={true}
            isMulti={false}
            options={pages}
            styles={selectStyles}
            classNamePrefix='select'
            placeholder={null}
            hideSelectedOptions={false}
            value={pages[currentPage - 1]}
            isDisabled={pages.length < 2 ? true : false}
            onChange={(option: any) => {
              onChangePage({
                currentPage: option.page,
                totalPages,
                start: option.start,
                end: option.end
              });
            }}
            components={{
              ClearIndicator: false,
              DropdownIndicator,
              IndicatorSeparator: null,
              Option: IconOption
            }}
          />
        )}
      </PaginationSelectButton>
      <Total>of {formatNumber(totalRecords)}</Total>

      <Button disabled={currentPage === 1} onClick={onPrevClick}>
        <Icon name='caret-left' />
      </Button>

      <Button disabled={currentPage === totalPages} onClick={onNextClick}>
        <Icon name='caret-right' />
      </Button>
    </Container>
  );
};

export default Pagination;
