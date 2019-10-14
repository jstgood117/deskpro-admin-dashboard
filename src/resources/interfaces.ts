export interface ISidebarItem {
	navItemName: string;
	url?: string;
	navItems?: ISidebarItem[]; // having this array turns this SidebarItem into a SidebarSubSection
}

export interface ISidebarSection {
	sectionName?: string;
	navItems?: ISidebarItem[];
}

export interface ITableColumn {
	title: string;
	field: string;
}

export interface ITableRow {}

export interface ITableData {
	columns: ITableColumn[];
	rows?: ITableRow[];	
}

export interface IPageData {
  id: string,
  headerTitle: string,
  headerCopy?: string,
  sidebarData: ISidebarSection[],
  tableData?: ITableData,
}