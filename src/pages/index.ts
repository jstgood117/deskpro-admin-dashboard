import AgentsSettings from './Agents/Settings';
import ExamplePage from './Bespoke/Example';
import ResetHelpdesk from './Bespoke/ResetHelpdesk';
import ImporterPage from './Bespoke/Importer';
import DataCenter from './Bespoke/DataCenter';
import TicketLocking from './Bespoke/TicketLocking';
import TicketDeflection from './Bespoke/TicketDeflection';
import { KeyValue } from '../types';

export const RouteToPage: KeyValue = {
  '/agents/settings': AgentsSettings,
  '/sysadmin/settings': ExamplePage,
  '/help-center/kb/settings': ResetHelpdesk,
  '/importer': ImporterPage,
  '/data-center': DataCenter,
  '/tickets/locking': TicketLocking,
  '/tickets/deflection': TicketDeflection
};
