import { SFC } from 'react';
import { ISidebarItem } from '../../../../../resources/interfaces';
export interface IProps {
    key: number;
    navItemName: string;
    navItems?: ISidebarItem[];
}
declare const SidebarSubSection: SFC<IProps>;
export default SidebarSubSection;
