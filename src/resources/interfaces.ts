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
	}],
	newLink?: string,
	views?: Array<IViewData>,
}

export interface IViewData {
	title: string,
	dataQuery: string,
	tableDef: {
		columns: Array<ITableColumn>,
	},
}

export interface ITableColumn {
	title: string,
	field?: string,
	data?: Array<any>,
	defaultShow?: boolean,
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


export interface ITableSetup {
	columns: Array<ITableColumn>
}

export interface IMenuItemProps {
  name?: string;
  subItems?: IMenuItemProps[];
  icon?: string;
}