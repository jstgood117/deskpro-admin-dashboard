import React, { FC, useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { injectIntl, WrappedComponentProps } from 'react-intl';

import { DeskproAdminTheme } from '../Theme';
import { FilterProps } from '../../resources/interfaces/filterMeta';
import { FilterMeta } from '../../resources/interfaces/filterMeta';

import Property from './Sections/Property';
import Operator from './Sections/Operator';
import Values from './Sections/Values';

export const StyledAutoComplete = styled.div<{ name: string }>`
  font-family: ${props => props.theme.mainFont};
  position: relative;
  display: inline-flex;
  width: 100%;
  div {
    width: 100%;
  }
  input {
    border-top-left-radius: ${props => props.name === 'property' && 4}px;
    border-bottom-left-radius: ${props => props.name === 'property' && 4}px;
    width: 100%;
    height: 34px;
    padding: 1px 30px 1px 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: ${props => props.theme.staticColour};
    box-sizing: border-box;
    border: 1px solid ${props => props.theme.greyLight};
    border-right: 0;
    &:focus {
      height: 34px;
      border: 1px solid #9fccf3;
      box-sizing: border-box;
      outline: none;
      box-shadow: 0px 0px 8px #d2d8dd;
    }
  }
  span {
    position: absolute;
    right: 15px;
    display: flex;
    align-items: center;
    height: 34px;
  }
`;

export interface IProps {
  placeholder?: string;
  setFilters?: (e: any) => void;
  index?: number;
  filter?: FilterProps;
  filters?: FilterProps[];
  options: FilterMeta[];
  getUniqueValues?: (columnName: string) => string[];
}

const FilterOptions: FC<IProps & WrappedComponentProps> = ({
  intl,
  setFilters,
  filters,
  filter,
  index,
  options,
  getUniqueValues,
  ...props
}) => {
  const [currentProperty, setProperty] = useState();
  const [currentOption, setOption] = useState();
  const [currentPath, setCurrentPath] = useState(filter.property);
  const [currentOperator, setCurrentOperator] = useState(filter.operatorName);
  const [containProperties, setProperties] = useState(options);
  const [containOptions, setOptions] = useState([]);
  // eslint-disable-next-line
  const [containType, setType] = useState<string>();
  const [filterValue, setFilterValue] = useState<string[]>([]);
  // eslint-disable-next-line
  const [uniqueValues, setUniqueValues] = useState<string[]>([]);

  useEffect(() => {
    if (currentOperator) {
      containOptions.map(item => {
        if (item === currentOperator)
          filters[index].operatorName = currentOperator;
        return true;
      });
    }

    if (currentPath) {
      containProperties.map(item => {
        if (item.path === currentPath) filters[index].property = currentPath;
        return true;
      });
    }

    if (setFilters) {
      setFilters(filters);
    }
  }, [
    currentOperator,
    currentPath,
    filters,
    index,
    setFilters,
    containOptions,
    containProperties
  ]);

  // Keep current type based on filted
  useEffect(() => {
    const option = options.find(item => item.dataPath === filter.property);
    if (option) {
      setType(option.type);
    }
  }, [filter, options]);

  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <Property
        containProperties={containProperties}
        placeholder={props.placeholder}
        setProperty={setProperty}
        setProperties={setProperties}
        options={options}
        filter={filter}
        currentPath={currentPath}
        currentProperty={currentProperty}
        setCurrentPath={setCurrentPath}
        setOptions={setOptions}
        setOption={setOption}
        setCurrentOperator={setCurrentOperator}
        setType={setType}
        getUniqueValues={getUniqueValues}
        setUniqueValues={setUniqueValues}
      />

      <Operator
        containOptions={containOptions}
        currentProperty={currentProperty}
        currentPath={currentPath}
        setOption={setOption}
        setOptions={setOptions}
        filter={filter}
        containProperties={containProperties}
        currentOperator={currentOperator}
        currentOption={currentOption}
        setCurrentOperator={setCurrentOperator}
      />

      <Values
        containType={containType}
        filter={filter}
        filters={filters}
        filterValue={filterValue}
        index={index}
        setFilterValue={setFilterValue}
        setFilters={setFilters}
        uniqueValues={uniqueValues}
      />
    </ThemeProvider>
  );
};

export default injectIntl(FilterOptions);
