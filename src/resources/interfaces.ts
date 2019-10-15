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
	navItems?: ISidebarItem[], // having this array turns this SidebarItem into a SidebarSubSection
}

export interface ITranslation {}

export interface ITableColumn {
	title: string,
	field?: keyof ITableRow,
	props?: object,
	sort?: boolean, // default false 
  render?: (data: ITableRow, type: ('row' | 'group')) => any,
}

export interface ITableRow {
	[key: string]: any,
}

export interface ITableData {
	columns: ITableColumn[],
	search?: boolean, // default false
}

export interface IPageData {
	path: string,
	pageType: string,
	pageProps: IPageProps,
}

export interface IPageProps {
	title: string,
	description?: string,
	illustration?: string, // TBD whether this is a local link
	tables?: ITableQuery[],
}

export interface ITableQuery {
	dataQuery: string,
	metadataQuery: string,
}
