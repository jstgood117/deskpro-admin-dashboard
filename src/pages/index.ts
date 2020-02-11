import AgentsSettings from './Agents/Settings';
import ExamplePage from './Bespoke/Example';
import ResetHelpdesk from './Bespoke/ResetHelpdesk';
import ImporterPage from './Bespoke/Importer';
import FileCheckPage from './Bespoke/FileCheck';
import HelpCenterSetupPage from './Bespoke/HelpCenterSetup';
import DataCenter from './Bespoke/DataCenter';
import TicketLocking from './Bespoke/TicketLocking';
import TicketDeflection from './Bespoke/TicketDeflection';
import VoiceSettings from './Bespoke/VoiceSettings';
import RealTimeEvents from './Bespoke/RealTimeEvents';
import ReportFile from './Bespoke/ReportFile';

import { KeyValue } from '../types';

export const RouteToPage: KeyValue = {
  '/agents/settings': AgentsSettings,
  '/sysadmin/settings': ExamplePage,
  '/help-center/kb/settings': ResetHelpdesk,
  '/importer': ImporterPage,
  '/sysadmin/file-check': FileCheckPage,
  '/help-center/setup': HelpCenterSetupPage,
  '/data-center': DataCenter,
  '/tickets/locking': TicketLocking,
  '/tickets/deflection': TicketDeflection,
  '/voice/settings': VoiceSettings,
  '/sysadmin/realtime-events': RealTimeEvents,
  '/agents/logs': ReportFile
};
