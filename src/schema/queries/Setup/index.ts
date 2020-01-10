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
				pageType
				metadataQuery
				drawerItems {
					itemName
					path
					pageType
					metadataQuery
				}
				navItems {
					itemName
					path
					pageType
					metadataQuery
				}
			}
		}
}
`;

export default QUERY_INITIAL;