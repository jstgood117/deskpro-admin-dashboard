import { CSSProperties } from 'react';

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
    columns: ITableColumn<object>[],
  };
}

export interface ITableColumn<T> {
  title: string;
  field?: string;
  data?: any[];
  defaultShow?: boolean;
}

export interface ISidebarSection {
  sectionName: string;
  navItems?: ISidebarItem[];
}

export interface ISidebarItem {
  itemName: string;
  path?: string;
  metadataQuery?: string;
  navItems?: ISidebarItem[]; // having this array turns this SidebarItem into a SidebarSubSection
}


export interface ITableSetup {
  columns: ITableColumn<object>[];
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
  submenuPosition?: string;
  onSelect?: (value: IMenuItemProps) => void;
  order?: (value: IMenuItemProps[]) => void;
  setChecked?: (value: any) => void;
  checked?: {[key: string]: any};
  item?: IMenuItemProps;
  selectedValue?: IMenuItemProps;
  selected? : boolean;
}

export interface IMenuItemProps {
  key?: number;
  name?: string;
  subItems?: IMenuItemProps[];
  icon?: string;
}