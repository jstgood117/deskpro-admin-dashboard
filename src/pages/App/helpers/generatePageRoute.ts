import {generatePageRouteComponent} from './generatePageRouteComponent';
import { ISidebarItem } from '../../../resources/interfaces';

export const generatePageRoute = (section: ISidebarItem, postFixPaths?: string[] ): JSX.Element => {

  return Array.isArray(section.paths)
    ? generatePageRouteComponent(section.path, section.paths, section, postFixPaths)
    : generatePageRouteComponent(section.path, [section.path], section, postFixPaths);

};