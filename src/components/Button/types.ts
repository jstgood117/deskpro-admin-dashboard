import { ReactNode } from 'react';
import { SizeTypes } from '../../types';
import { IButtonItemProps } from '../../resources/interfaces';

export interface IButtonStyleProp {
  styles: IButtonStyle;
  hasClearButton: boolean;
  iconOnly: boolean;
}

export interface IButtonStyle {
  static: {
    backgroundColor: string;
    color: string;
    svgColor: string;
    size: number;
    border?: string;
  };
  hover: {
    backgroundColor: string;
    svgColor: string;
    color: string;
    size: number;
    border?: string;
  };
}

export type IButtonProps = {
  disabled?: boolean;
  // `type` attribute for button behavior on forms
  buttonType?: 'submit' | 'button';
  children?: ReactNode;
  styleType: ButtonStyleType;
  size?: SizeTypes;
  opened?: boolean;
  items?: IButtonItemProps[] | any;
  showClearButton?: boolean;
  renderItem?: (item: any, index: number) => React.ReactElement;
  onClear?: () => void;
  onClick?: () => void;
  onSelect?: (value: any) => void;
  dropdownValue?: any;
  iconOnly?: boolean;
  className?: string;
  imageBtnSelected?: boolean;
  name?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

export type ButtonStyleType =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'imageButton';

export interface IHasButtonType {
  hasClearButton: boolean;
}