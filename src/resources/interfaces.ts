export interface IInitialData {
	user: IUser,
	sidebar: ISidebarSection[],
	translations: ITranslation,
}

export interface IUser {
	locale: string,
}

export interface ISidebarSection {
	sectionName: string,
	navItems?: ISidebarItem[],
}

export interface ISidebarItem {
	itemName: string,
	url?: string,
	metadataQuery?: string,
	navItems?: ISidebarItem[], // having this array turns this SidebarItem into a SidebarSubSection
}

export interface ITranslation {}

/* export interface ITableColumn {
	title: string,
	field?: keyof ITableRow,
	props?: object,
	sorting?: boolean,
	searchable?: boolean,
  render?: (data: ITableRow, type: ('row' | 'group')) => any,
  customSort?: (a:any,b:any) => any,
}

export interface ITableRow {
	[key: string]: any,
} */

export interface IPageData {
	path: string,
	pageType: string,
	pageProps: IPageProps,
}

export interface IPageProps {
	title: string,
	description?: string,
	illustration?: string, // TBD whether this is a local link
	tables?: ITableSetup[],
}

export interface ITableSetup {
	dataQuery: string,
	metadataQuery: string,
	options: {
		[key: string]: any,
	}
}
