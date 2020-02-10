import AgentsSettings from './Agents/Settings';
import ExamplePage from './Bespoke/Example';
import ResetHelpdesk from './Bespoke/ResetHelpdesk';
import ImporterPage from './Bespoke/Importer';
import FileCheckPage from './Bespoke/FileCheck';
import HelpCenterSetupPage from './Bespoke/HelpCenterSetup';
import HelpCenterCommunitySettingsPage from './Bespoke/HelpCenterCommunitySettings';
import HelpCenterDownloadSettingsPage from './Bespoke/HelpCenterDownloadSettings';
import HelpCenterNewsSettingsPage from './Bespoke/HelpCenterNewsSettings';
import HelpCenterGuidesSettingsPage from './Bespoke/HelpCenterGuidesSettings';
import DataCenter from './Bespoke/DataCenter';
import TicketLocking from './Bespoke/TicketLocking';
import RealTimeEvents from './Bespoke/RealTimeEvents';

import { KeyValue } from '../types';

export const RouteToPage: KeyValue = {
  '/agents/settings': AgentsSettings,

  '/importer': ImporterPage,
  '/data-center': DataCenter,
  '/tickets/locking': TicketLocking,

  '/help-center/kb/settings': ResetHelpdesk,
  '/help-center/setup': HelpCenterSetupPage,
  '/help-center/community/settings': HelpCenterCommunitySettingsPage,
  '/help-center/downloads/settings': HelpCenterDownloadSettingsPage,
  '/help-center/news/settings': HelpCenterNewsSettingsPage,
  '/help-center/guides/settings': HelpCenterGuidesSettingsPage,

  '/sysadmin/settings': ExamplePage,
  '/sysadmin/file-check': FileCheckPage,
  '/sysadmin/realtime-events': RealTimeEvents
};
