# SidebarItem

This component renders within SidebarSection component, depending on the data passed in

# SidebarItem Component Contract

* it has Props of:
	key - unique key
	navData - ISidebarItem object
* it has no State
* it always renders a <li> element, containing the rest of the component
* renders in an 'active' style if the item matches the current page
* item is clickable, and should apply a react-router link (not a browser refresh)


* some navigation items are sub-menus, shown with a chevron
* sub-menus are clickable and opened the navigation items within