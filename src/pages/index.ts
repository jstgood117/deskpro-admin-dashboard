import AgentsSettings from './Agents/Settings';
import ExamplePage from './Bespoke/Example';
import ResetHelpdesk from './Bespoke/ResetHelpdesk';
import { KeyValue } from '../types';

export const RouteToPage: KeyValue = {
  '/agents/settings': AgentsSettings,
  '/sysadmin/settings': ExamplePage,
  '/help-center/kb/settings': ResetHelpdesk
};
