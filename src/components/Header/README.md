
# Header

  

This component provides the main page header

  

# Header Component Contract

  

* it has Props of:

		children?: ReactNode - to be rendered within the button tag

		title: string - Header Title

		description: string - Header description

		illustration?: string - Heder Background Imagew

		links?: ILink[] - Login, Setting links

		showHelpButton?: boolean - Flag to show Help Button

		showViewModeSwitcher?: boolean - Flag to show ViewMode Button

		defaulViewMode?: 'table' | 'list' | 'map' - View Mode

		showNewButton?: boolean - Flag to show New Button

		tableActions?: boolean - Flag to show TableActions

		onChangeView?: (viewMode: string) => void - ViewMode change function

		onNewClick?: () => void - New Button Click function

* it has View mode State

* it always renders a `<div>, <button>, <a>, <input>, <span>, <svg>` element, containing the rest of the component