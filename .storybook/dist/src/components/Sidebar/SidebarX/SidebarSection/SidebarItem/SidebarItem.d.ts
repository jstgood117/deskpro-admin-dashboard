import { Component } from 'react';
export interface IProps {
    key: number;
    navItemName: string;
    url?: string;
}
interface IState {
    redirect: boolean;
}
declare class SidebarItem extends Component<IProps, IState> {
    constructor(props: IProps);
    handleOnClick: () => void;
    render(): JSX.Element;
}
export default SidebarItem;
