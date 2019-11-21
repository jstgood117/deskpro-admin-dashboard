import React from 'react';

import { FilterType } from '../services/filters/types';
import { ITableSetup, ITableColumn } from '../resources/interfaces';
import { IFilterProps } from '../resources/interfaces/filterMeta';

export type StandardTablePageContextValuesType = {
  filters: FilterType[];
  onFilterChange: (rules: IFilterProps[]) => void;
  onSearchChange: (value: string, filters: IFilterProps[]) => void;
  tableDef: ITableSetup;
};

const filters: FilterType[] = [];
const columns: ITableColumn[] = [];

const StandardTableContext = React.createContext({
  filters,
  onFilterChange: (rules: IFilterProps[]) => undefined,
  onSearchChange: (value: string, filters: IFilterProps[]) => undefined,
  tableDef: {columns},
});

export const StandardTableProvider = StandardTableContext.Provider;
export const StandardTableConsumer = StandardTableContext.Consumer;
export default StandardTableContext;
