
import AgentsSettings from './Agents/Settings';
import ExamplePage from './Bespoke/Example';
import ImporterPage from './Bespoke/Importer';
import { KeyValue } from '../types';


export const RouteToPage: KeyValue = {
  '/agents/settings': AgentsSettings,
  '/sysadmin/settings': ExamplePage,
  '/importer': ImporterPage,
};

