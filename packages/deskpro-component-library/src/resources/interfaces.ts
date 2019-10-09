export interface INavItemData {
	navItemName: string;
	url: string;
}

export interface INavSectionData{
	sectionName: string;
	navItems: INavItemData[];
}
