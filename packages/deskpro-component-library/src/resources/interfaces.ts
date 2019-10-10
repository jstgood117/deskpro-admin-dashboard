export interface ISidebarItem {
	navItemName: string;
	url: string;
}

export interface ISidebarSection {
	sectionName?: string;
	navItems?: ISidebarItem[];
}
