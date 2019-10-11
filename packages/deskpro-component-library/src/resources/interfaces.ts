export interface ISidebarItem {
	navItemName: string;
	url?: string;
	navItems?: ISidebarItem[]; // having this array turns this SidebarItem into a SidebarSubSection
}

export interface ISidebarSection {
	sectionName?: string;
	navItems?: ISidebarItem[];
}
