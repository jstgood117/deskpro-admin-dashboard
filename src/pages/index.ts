import AgentsSettings from './Agents/Settings';
import AuthSSO from './Agents/AuthSSO';
import ExamplePage from './Bespoke/Example';
import ResetHelpdesk from './Bespoke/ResetHelpdesk';
import ImporterPage from './Bespoke/Importer';
import FileCheckPage from './Bespoke/FileCheck';
import HelpCenterSetupPage from './Bespoke/HelpCenterSetup';
import DataCenter from './Bespoke/DataCenter';
import TicketLocking from './Bespoke/TicketLocking';
import TicketsProblems from './Bespoke/TicketsProblems';
import TicketReferences from './Bespoke/TicketReferences';
import TicketDeflection from './Bespoke/TicketDeflection';
import VoiceSettings from './Bespoke/VoiceSettings';
import RealTimeEvents from './Bespoke/RealTimeEvents';
import InterfaceDefaults from './Bespoke/InterfaceDefaults';
import ReportFile from './Bespoke/ReportFile';
import Tasks from './Bespoke/Tasks';
import BusinessHours from './Bespoke/BusinessHours';

import { KeyValue } from '../types';

export const RouteToPage: KeyValue = {
  '/agents/auth/settings': AuthSSO,
  '/agents/settings': AgentsSettings,
  '/sysadmin/settings': ExamplePage,
  '/help-center/kb/settings': ResetHelpdesk,
  '/importer': ImporterPage,
  '/sysadmin/file-check': FileCheckPage,
  '/help-center/setup': HelpCenterSetupPage,
  '/data-center': DataCenter,
  '/tickets/locking': TicketLocking,
  '/tickets/problems': TicketsProblems,
  '/tickets/ref-codes': DataCenter,
  '/tickets/deflection': TicketDeflection,
  '/voice/settings': VoiceSettings,
  '/sysadmin/realtime-events': RealTimeEvents,
  '/interface-defaults': InterfaceDefaults,
  '/agents/logs': ReportFile,
  '/tasks': Tasks,
  '/settings/business-hours': BusinessHours
};
