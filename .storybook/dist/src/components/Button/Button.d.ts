import { ReactNode, SFC } from 'react';
export interface IStyleProps {
    styleType: 'primary' | 'secondary' | 'tertiary';
}
export interface IProps {
    children?: ReactNode;
    onClick?: (e: any) => void;
}
declare const Button: SFC<IProps & IStyleProps>;
export default Button;
