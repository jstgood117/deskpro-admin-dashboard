# SidebarSection

This component renders a vertical navigation menu for the Deskpro Admin

# Sidebar Component Contract

* it has Props of:
	navData - an array of ISidebarSection objects
* it has no State
* it always renders a <nav> element, containing the rest of the component
* within the <nav> it shows as many SidebarSection components as there are sectionName in the navData
