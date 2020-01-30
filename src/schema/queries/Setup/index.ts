import { gql } from 'apollo-boost';

export const QUERY_INITIAL = gql`
	query  {
		translations: setupUi_translations_all(locale: "en") {
			id
			message
		}

		user: authMe {
			locale
		}

		sidebar: setupUi_interface_sidebar {
			sectionName
			icon
			navItems {
				itemName
				path
				paths
				pageType
				metadataQuery
				drawerItems {
					itemName
					path
					paths
					pageType
					metadataQuery
				}
				navItems {
					itemName
					path
					paths
					pageType
					metadataQuery
				}
			}
		}
}
`;

export default QUERY_INITIAL;