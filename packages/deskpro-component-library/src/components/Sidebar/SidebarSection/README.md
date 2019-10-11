# SidebarSection

This component renders within Sidebar component, depending on the data passed in

# SidebarSection Component Contract

* it has Props of:
	key - unique key
	navData - ISidebarSection object
* it has no State
* it may render nothing
* if sectionName is defined in navData, render the label and the associated icon
* if icon is missing, only render the label
* if navItems is defined in navData, render <ul> element, containing as many SidebarItem components as there are elements in navItems
* if a SidebarItem has an array of navItems then render a SidebarSubSection instead of a SidebarItem
