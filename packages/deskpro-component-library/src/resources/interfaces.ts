export interface ISidebarItem {
	navItemName: string;
	url: string;
}

export interface ISidebarSection {
	sectionName?: string;
	navItems?: ISidebarItem[];
}

export interface ITableColumns {
	key: string;
	label: string;
}

export interface ITableData {
	[key:string]: string | number | undefined,
}