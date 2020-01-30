import { flatMap } from 'lodash';
import { ISidebarSection, ISidebarItem } from '../../../resources/interfaces';
export const generateDrawerRoutes = (
  links: ISidebarSection[],
  generateFunc: (section: ISidebarItem) => JSX.Element
): JSX.Element[] => {
  return flatMap(
    links.map(section => section.navItems),
    sectionItem => flatMap(sectionItem, _item => _item.navItems || []).concat(sectionItem)
  )
    .filter((_section: ISidebarItem) => _section.path || _section.paths)
    .reduce((acc: JSX.Element[], _section: ISidebarItem) => {

      if(_section.drawerItems && _section.drawerItems.length > 0) {
        return acc.concat(_section.drawerItems.map(
          _drawItem => generateFunc(_drawItem)
        ));
      }

      return acc;

    }, ([] as JSX.Element[]));
};