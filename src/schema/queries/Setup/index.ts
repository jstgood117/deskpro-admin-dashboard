import { gql } from 'apollo-boost';

export const QUERY_INITIAL = gql`
	query  {
		translations: setupui_translations_all(locale: "en") {
			id
			message
		}

		user: auth_me {
			locale
		}

		sidebar: setupui_interface_sidebar {
			sectionName
			icon
			navItems {
				itemName
				path
				pageType
				metadataQuery
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