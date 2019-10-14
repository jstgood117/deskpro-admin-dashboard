import { Component } from 'react';
export interface IProps {
    columns: any;
    tableData: any;
}
interface IState {
    tableData: any;
}
declare class Table extends Component<IProps, IState> {
    constructor(props: IProps);
    componentDidUpdate(prevProps: IProps): void;
    render(): JSX.Element;
}
export default Table;
