# SidebarSubSection

This component renders within SidebarSection component, depending on the data passed in

# SidebarSubSection Component Contract

* it has Props of:
	key - unique key
	itemName - text to display
	navItems - array of SidebarItem objects
* it has no State
* it always renders a <li> element, containing the rest of the component
* item is clickable, and should show/hide the SidebarItems
* up/down arrow is shown next to the name
