import { flatMap } from 'lodash';
import { generateDrawerItemPaths } from './generateDrawerItemPaths';
import { ISidebarSection, ISidebarItem } from '../../../resources/interfaces';

export const generatePageRoutes = (
  links: ISidebarSection[],
  generateFunc: (section: ISidebarItem, postFixPaths?: string[]) => JSX.Element
): JSX.Element[] => {
  return flatMap(
    links.map(section => section.navItems),
    sectionItem => flatMap(sectionItem, _item => _item.navItems || []).concat(sectionItem)
  )
    .filter((_section: ISidebarItem) => _section.path || _section.paths)
    .reduce((acc: JSX.Element[], _section: ISidebarItem) => {

      const postFixPaths = generateDrawerItemPaths(_section);

      return acc.concat([
        generateFunc(_section, postFixPaths)
      ]);
    }, ([] as JSX.Element[]));
};