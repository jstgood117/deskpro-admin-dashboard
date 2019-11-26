import React from 'react';

import { FilterType } from '../services/filters/types';
import { ITableSetup, ITableColumn } from '../resources/interfaces';
import { FilterProps, FilterMeta } from '../resources/interfaces/filterMeta';

export type StandardTableContextValues = {
  path: string;
  filters: FilterType[];
  onFilterChange: (rules: FilterProps[]) => void;
  onSearchChange: (value: string, filters: FilterProps[]) => void;
  tableDef: ITableSetup;
  filterDef: FilterMeta[];
};

const filterDef: FilterMeta[] = [];
const filters: FilterType[] = [];
const columns: ITableColumn[] = [];

const defaultContextValues: StandardTableContextValues = {
  path: '/',
  filters,
  onFilterChange: (rules: FilterProps[]) => undefined,
  onSearchChange: (value: string, filters: FilterProps[]) => undefined,
  tableDef: {columns},
  filterDef
};
export const StandardTableContext = React.createContext(defaultContextValues);
export const StandardTableProvider = StandardTableContext.Provider;
export const StandardTableConsumer = StandardTableContext.Consumer;
