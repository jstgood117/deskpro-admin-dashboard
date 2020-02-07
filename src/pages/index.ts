import AgentsSettings from './Agents/Settings';
import ExamplePage from './Bespoke/Example';
import ResetHelpdesk from './Bespoke/ResetHelpdesk';
import ImporterPage from './Bespoke/Importer';
import FileCheckPage from './Bespoke/FileCheck';
import DataCenter from './Bespoke/DataCenter';
import TicketLocking from './Bespoke/TicketLocking';

import { KeyValue } from '../types';

export const RouteToPage: KeyValue = {
  '/agents/settings': AgentsSettings,
  '/sysadmin/settings': ExamplePage,
  '/help-center/kb/settings': ResetHelpdesk,
  '/importer': ImporterPage,
  '/sysadmin/file-check': FileCheckPage
  '/data-center': DataCenter,
  '/tickets/locking': TicketLocking
};
