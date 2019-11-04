import React, { useState, useEffect, CSSProperties } from 'react';
import styled, { css } from 'styled-components';

import { dpstyle, FlowLayout } from '../Styled';
import Icon from '../Icon';
import { H6, P1 } from '../Typography';

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

const ListContainer = styled(dpstyle.div)`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  padding: 5px 0;
  position: absolute;
  background: #fff;
  min-width: 120px;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  z-index: 1;
  top: 30px;
  left: 0;
  width: 100%;
`;

const ListItem = styled(FlowLayout)<{ active: boolean }>`
  padding: 0px 15px;
  min-height: 31px;
  z-index: 1;
  color: ${props => props.theme.staticColour};
  font-size: 14px;
  font-weight: ${props => (props.active ? 500 : 'normal')};
  justify-content: space-between;
  &:hover {
    background: ${props => props.theme.textHover};
  }
`;

const Option = styled(FlowLayout)<{ active: boolean }>`
  background: #fff;
  position: relative;
  border-radius: 3px;
  border: 1px solid ${props => props.theme.greyLight};
  height: 28px;
  padding: 0px 12px;
  cursor: pointer;
  margin-right: 7px;
  color: ${props => props.theme.greyDark};
  > div {
    font-weight: normal;
    margin-right: 20px;
  }
  justify-content: space-between;
  min-width: ${props => props.minWidth || 64}px;
  ${props =>
    props.active &&
    css`
      background: ${props.theme.hoverColour};
      border-color: ${props.theme.activeColour};
      path {
        fill: ${props.theme.activeColour};
      }
    `} {
  }
`;

const DropdownContentPanel = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 0;
`;

const Total = styled(H6)`
  color: ${props => props.theme.staticColour};
  font-weight: normal;
  margin-left: 3px;
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
}

export interface IProps {
  totalRecords: number;
  rowsPerPage: number;
  currentPage: number;
  rowsPerPageOptions?: number[];
  containerStyle?: CSSProperties;
  containerClassName?: string;
  onChangePage: (data: IPageChange) => void;
  onChangeRowsPerPage: (data: number) => void;
}

const Pagination: React.FC<IProps> = ({
  totalRecords,
  rowsPerPage = 10,
  currentPage = 1,
  rowsPerPageOptions = [200, 100, 50, 20, 10],
  containerStyle,
  containerClassName,
  onChangePage,
  onChangeRowsPerPage
}) => {
  const [totalPages, setTotalPages] = useState(0);
  const [pages, setPages] = useState<IPageItem[]>([]);
  const [showRowsPerPage, setShowRowsPerPage] = useState(false);
  const [showPages, setShowPages] = useState(false);

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
      _pages.push({
        start,
        end,
        page,
        label
      });
      page += 1;
    }

    // Update state
    setTotalPages(total);
    setPages(pages);
  }, [totalRecords, rowsPerPage, currentPage]);

  return (
    <Container style={containerStyle} className={containerClassName}>
      <Label>Rows per page:</Label>
      <Option
        active={showRowsPerPage}
        minWidth={59}
        onClick={() => setShowRowsPerPage(!showRowsPerPage)}
      >
        <P1>{rowsPerPage}</P1>
        <Icon name='downVector' />

        {showRowsPerPage && (
          <ListContainer>
            {rowsPerPageOptions.map(item => (
              <ListItem
                key={item}
                active={rowsPerPage === item}
                onClick={event => {
                  event.preventDefault();
                  onChangeRowsPerPage(item);
                }}
              >
                {formatNumber(item)}
                {rowsPerPage === item && <Icon name='check-2' />}
              </ListItem>
            ))}
            <DropdownContentPanel />
          </ListContainer>
        )}
      </Option>

      <Divider />

      <Option
        active={showPages}
        minWidth={94}
        onClick={() => setShowPages(!showPages)}
      >
        <H6>{pages[currentPage - 1] && pages[currentPage - 1].label}</H6>
        <Icon name='downVector' />

        {showPages && (
          <ListContainer>
            {pages.map(item => (
              <ListItem
                key={item.page}
                active={currentPage === item.page}
                onClick={event => {
                  event.preventDefault();
                  onChangePage({
                    currentPage: item.page,
                    totalPages,
                    start: item.start,
                    end: item.end
                  });
                }}
              >
                {item.label}
                {currentPage === item.page && <Icon name='check-2' />}
              </ListItem>
            ))}
            <DropdownContentPanel />
          </ListContainer>
        )}
      </Option>

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