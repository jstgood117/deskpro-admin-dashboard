import queries from '../../schema/queries';

const getQueryBasedOnRoute = (route:string) => {
  switch(route) {
    case '/agents':
      return queries['QUERY_AGENTS_PAGE'];
    case '/':
      return queries['QUERY_INITIAL'];
    default:
      return {};
  }
};

export const QueryService = () => {
  return {
    getQueryBasedOnRoute
  };
};
