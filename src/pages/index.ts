import AgentsSettings from './Agents/Settings';
import AuthSSO from './Agents/AuthSSO';
import ExamplePage from './Bespoke/Example';
// import ResetHelpdesk from './Bespoke/ResetHelpdesk';
import ImporterPage from './Bespoke/Importer';
import FileCheckPage from './Bespoke/FileCheck';
import HelpCenterSetupPage from './Bespoke/HelpCenterSetup';
import HelpCenterCommunitySettingsPage from './Bespoke/HelpCenterCommunitySettings';
import HelpCenterDownloadSettingsPage from './Bespoke/HelpCenterDownloadSettings';
import HelpCenterNewsSettingsPage from './Bespoke/HelpCenterNewsSettings';
import HelpCenterGuidesSettingsPage from './Bespoke/HelpCenterGuidesSettings';
import HelpCenterKnowledgebaseSettingsPage from './Bespoke/HelpCenterKnowledgebaseSettings';
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
  '/agents/logs': ReportFile,

  '/importer': ImporterPage,
  '/data-center': DataCenter,
  '/voice/settings': VoiceSettings,
  '/interface-defaults': InterfaceDefaults,
  '/tasks': Tasks,
  '/settings/business-hours': BusinessHours,

  '/tickets/locking': TicketLocking,
  '/tickets/problems': TicketsProblems,
  '/tickets/ref-codes': TicketReferences,
  '/tickets/deflection': TicketDeflection,

  // '/help-center/kb/settings': ResetHelpdesk,
  '/help-center/setup': HelpCenterSetupPage,
  '/help-center/community/settings': HelpCenterCommunitySettingsPage,
  '/help-center/downloads/settings': HelpCenterDownloadSettingsPage,
  '/help-center/news/settings': HelpCenterNewsSettingsPage,
  '/help-center/guides/settings': HelpCenterGuidesSettingsPage,
  '/help-center/kb/settings': HelpCenterKnowledgebaseSettingsPage,

  '/sysadmin/settings': ExamplePage,
  '/sysadmin/file-check': FileCheckPage,
  '/sysadmin/realtime-events': RealTimeEvents
};
