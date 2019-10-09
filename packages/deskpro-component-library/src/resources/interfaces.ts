export interface INavItemData {
	navItemName: string;
	url: string;
}

export interface INavSectionData {
	sectionName: string;
	navItems: INavItemData[];
}

export interface ITableColumns {
	key: string;
	label: string;
}

export interface ITableData {
	[key:string]: string | number | undefined,
}