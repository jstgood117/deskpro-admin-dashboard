import { SFC } from 'react';
import { ISidebarSection } from '../../../resources/interfaces';
export interface IProps {
    navData: ISidebarSection[];
}
declare const Sidebar: SFC<IProps>;
export default Sidebar;
