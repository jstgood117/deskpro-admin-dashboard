import React, { ReactNode, SFC } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';
import { dpstyle } from '../Styled';
import Icon from '../Icon';

type ButtonStyleType = 'primary' | 'secondary' | 'tertiary';
type ButtonSizeType = 'small' | 'medium';

interface IButtonStyle {
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

const getStyle = (
  styleType: ButtonStyleType,
  size: ButtonSizeType,
  theme: any
): IButtonStyle => {
  const styles = {
    small: {
      primary: {
        static: {
          backgroundColor: theme.activeColour,
          color: theme.white,
          svgColor: theme.white,
          size: 28
        },
        hover: {
          backgroundColor: theme.primaryHoverColour,
          color: theme.white,
          svgColor: theme.white,
          size: 28
        }
      },
      secondary: {
        static: {
          backgroundColor: theme.textHover,
          color: theme.activeColour,
          svgColor: theme.activeColour,
          size: 28,
          border: '1px solid #1C3E55'
        },
        hover: {
          backgroundColor: theme.hoverColour,
          color: theme.activeColour,
          svgColor: theme.activeColour,
          size: 28,
          border: '1px solid #1C3E55'
        }
      },
      tertiary: {
        static: {
          backgroundColor: theme.white,
          color: theme.greyDark,
          svgColor: theme.greyDark,
          size: 28,
          border: '1px solid #D3D6D7'
        },
        hover: {
          backgroundColor: theme.hoverColour,
          color: theme.activeColour,
          svgColor: theme.activeColour,
          size: 28,
          border: '1px solid #1C3E55'
        }
      }
    },
    medium: {
      primary: {
        static: {
          backgroundColor: theme.activeColour,
          color: theme.white,
          svgColor: theme.white,
          size: 34
        },
        hover: {
          backgroundColor: theme.primaryHoverColour,
          color: theme.white,
          svgColor: theme.white,
          size: 34
        }
      },
      secondary: {
        static: {
          backgroundColor: theme.white,
          color: theme.greyDark,
          svgColor: theme.greyDark,
          size: 34,
          border: '1px solid #D3D6D7'
        },
        hover: {
          backgroundColor: theme.hoverColour,
          color: theme.activeColour,
          svgColor: theme.activeColour,
          size: 34,
          border: '1px solid #1C3E55'
        }
      },
      tertiary: {
        static: {
          backgroundColor: theme.white,
          color: theme.greyDark,
          svgColor: theme.greyDark,
          size: 34,
          border: '1px solid #D3D6D7'
        },
        hover: {
          backgroundColor: theme.hoverColour,
          color: theme.activeColour,
          svgColor: theme.activeColour,
          size: 34,
          border: '1px solid #1C3E55'
        }
      }
    }
  };
  return styles[size][styleType];
};

const ButtonStyled = styled(dpstyle.button)<{ styles: IButtonStyle }>`
  background-color: ${props => props.styles.static.backgroundColor};
  color: ${props => props.styles.static.color};
  border: ${props => props.styles.static.border};
  outline: none;
  height: ${props => props.styles.static.size}px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  path {
    fill: ${props => props.styles.static.svgColor};
  }
  svg {
    padding-right: 8px;
  }
  &:hover {
    background-color: ${props => props.styles.hover.backgroundColor};
    color: ${props => props.styles.hover.color};
    border: ${props => props.styles.hover.border};
    path {
      fill: ${props => props.styles.hover.svgColor};
    }
  }
`;

export type IProps = {
  children?: ReactNode;
  onClick?: (e: any) => void;
  styleType: ButtonStyleType;
  size: ButtonSizeType;
  icon?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

const Button: SFC<IProps> = ({ styleType, size, icon, ...props }) => {
  const styles = getStyle(styleType, size, DeskproAdminTheme);
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <ButtonStyled onClick={props.onClick} styles={styles} {...props}>
        {icon && <Icon name={icon} />}
        {props.children}
      </ButtonStyled>
    </ThemeProvider>
  );
};

export default Button;
