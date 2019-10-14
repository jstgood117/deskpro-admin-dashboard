import { SFC } from 'react';
import { ISidebarItem } from '../../../../resources/interfaces';
export interface IProps {
    key: number;
    sectionName?: string;
    navItems?: ISidebarItem[];
}
declare const SidebarSection: SFC<IProps>;
export default SidebarSection;
