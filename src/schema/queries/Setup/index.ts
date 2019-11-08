import { gql } from 'apollo-boost';

export const QUERY_INITIAL = gql`
	query  {
		translations: adminInterface_getTranslations(locale: "en") {
			id
			message
		}

		user: adminInterface_getAdminUser {
			locale
		}

		sidebar: adminInterface_getAdminSidebar {
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