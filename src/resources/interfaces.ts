import { CSSProperties } from 'react';

export type KeyValue = {
  [key: string]: any;
};

export interface IUser {
  locale: string;
}

export interface IInitialData {
  user: IUser;
  sidebar: ISidebarSection[];
  translations: any;
}

export interface IPageData {
  __typename: string;
  title: string;
  description?: string;
  illustration?: string; // TBD whether this is a local link
  headerLinks: [{
      title: string,
      path: string,
  }];
  newLink?: string;
  views?: IViewData[];
}

export interface IViewData {
  title: string;
  dataQuery: string;
  tableDef: {
    columns: ITableColumn[],
  };
}

export interface ITableColumn {
  title: string;
  field: any; // TODO types
  defaultShow?: boolean;
  sort?: string;
}

export type ColumnOrder = {
  column: string;
  show: boolean;
};

export interface ISidebarSection {
  sectionName: string;
  icon: string;
  navItems?: ISidebarItem[];
}

export interface ISidebarItem {
  itemName: string;
  path?: string;
  pageType?: string;
  metadataQuery?: string;
  navItems?: ISidebarItem[]; // having this array turns this SidebarItem into a SidebarSubSection
}

export interface ITableSetup {
  columns: ITableColumn[];
}

export interface ISortItem 	{
  label: string;
  field: string;
  sort: 'asc' | 'desc';
}

export interface IMenuProps {
  iconName?: string;
  containerStyle?: CSSProperties;
  label?: string;
  menuItems?: IMenuItemProps[];
  initialList?: IMenuItemProps[];
  value?: IMenuItemProps;
  onSelect?: (value: IMenuItemProps) => void;
  order?: (value: IMenuItemProps[]) => void;
  setChecked?: (value: any) => void;
  checked?: {[key: string]: any};
  initialChecked?: {[key: string]: any};
  item?: IMenuItemProps;
  selected? : boolean;
  size?: ISizeTypes;
}

export interface IMenuItemProps {
  key?: number;
  name?: string;
  subItems?: IMenuItemProps[];
  icon?: string;
}

export interface ITableColor {
  background: string;
  textColor: string;
}

export interface ITabsProps {
  label?: string;
  messageId?: string;
}

export type ISizeTypes = 'small' | 'medium';