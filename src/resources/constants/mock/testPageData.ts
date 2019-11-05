import { IPageData } from '../../interfaces';

export const testPageData: IPageData = {
  __typename: 'StandardDataPageData',
  title: 'admin_agents.agents.title',
  description: 'admin_agents.agents.description',
  headerLinks: [
    {
      title: 'admin_agents.page.link.login_log',
      path: './login-log'
    }
  ]
  /*    newLink
    views {
      ... on InMemoryPageDataView {
        __typename
        title
        dataQuery
        tableDef {
          columns {
            title
            field
            data {
              propName
              path
              value
            }
            defaultShow
          }
        }
      }
    }
  } */
};