import agents from './pathActions/agents';
import ticketForms from './pathActions/ticketForms';

export const ActionFactory = (path: string) => {
  switch (path) {
    case '/agents':
      return agents;
    case '/tickets/forms':
      return ticketForms;
    default:
      return null;
  }
};
