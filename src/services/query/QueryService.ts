import queries from '../../schema/queries';

const getQuery = (type:string) => {
  switch(type) {
    case 'initial':
      return queries['QUERY_INITIAL'];
    case 'standardTablePage':
      return queries['STANDARD_TABLES_PAGE'];
    case 'standardSettingsPage':
      return queries['STANDARD_SETTINGS_PAGE'];
    default:
      return {};
  }
};

export const QueryService = () => {
  return {
    getQuery
  };
};
