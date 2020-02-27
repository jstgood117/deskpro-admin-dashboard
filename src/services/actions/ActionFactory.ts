import agents from './pathActions/agents';

export const ActionFactory = (path: string) => {
  switch (path) {
    case '/agents':
      return agents;
    case '/tickets/forms':
      return agents;
    default:
      return null;
  }
};
