export interface IUser {
	locale: string,
}

export interface IInitialData {
	user: IUser,
	sidebar: ISidebarSection[],
	translations: any,
}

export interface IPageData {
  __typename: string,
	title: string,
	description?: string,
	illustration?: string, // TBD whether this is a local link
	headerLinks: [{
			title: string,
			path: string,
	}]
}

export interface ISidebarSection {
	sectionName: string,
	navItems?: ISidebarItem[],
}

export interface ISidebarItem {
	itemName: string,
	path?: string,
	metadataQuery?: string,
	navItems?: ISidebarItem[], // having this array turns this SidebarItem into a SidebarSubSection
}

export interface ITableColumn {
	title: string,
	field?: string,
	data?: Array<any>,
	defaultShow?: boolean,
}

export interface ITableSetup {
	columns: Array<ITableColumn>
}