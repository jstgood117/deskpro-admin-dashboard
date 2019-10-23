import React, { SFC } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../../Theme';
import Icon from '../../Icon';

type ButtonStyleType = 'primary' | 'secondary';
type ButtonSizeType = 'small' | 'medium';

interface IButtonStyle {
  static: {
    backgroundColor: string;
    svgColor: string;
    size: number;
    hasBoxShadow: boolean;
  };
  hover: {
    backgroundColor: string;
    svgColor: string;
    size: number;
    hasBoxShadow: boolean;
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
          backgroundColor: theme.greyLighter,
          svgColor: theme.staticColour,
          size: 28,
          hasBoxShadow: false
        },
        hover: {
          backgroundColor: theme.hoverColour,
          svgColor: theme.activeColour,
          size: 28,
          hasBoxShadow: false
        }
      },
      secondary: {
        static: {
          backgroundColor: theme.secondaryColour,
          svgColor: theme.static2Colour,
          size: 28,
          hasBoxShadow: false
        },
        hover: {
          backgroundColor: theme.hoverColour,
          svgColor: theme.activeColour,
          size: 28,
          hasBoxShadow: false
        }
      }
    },
    medium: {
      primary: {
        static: {
          backgroundColor: theme.activeColour,
          svgColor: theme.secondaryColour,
          size: 34,
          hasBoxShadow: true
        },
        hover: {
          backgroundColor: theme.brandPrimary,
          svgColor: theme.secondaryColour,
          size: 34,
          hasBoxShadow: true
        }
      },
      secondary: {
        static: {
          backgroundColor: theme.secondaryColour,
          svgColor: theme.greyDark,
          size: 34,
          hasBoxShadow: false
        },
        hover: {
          backgroundColor: theme.hoverColour,
          svgColor: theme.activeColour,
          size: 34,
          hasBoxShadow: false
        }
      }
    }
  };
  return styles[size][styleType];
};

const ButtonStyled = styled.button<{ styles: IButtonStyle }>`
  outline: none;
  border: none;
  border-radius: 3px;
  height: ${props => props.styles.static.size}px;
  width: ${props => props.styles.static.size}px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.styles.static.backgroundColor};
  box-shadow: ${props =>
    props.styles.static.hasBoxShadow ? ' 0px 0px 8px #9fccf3' : ''};
  path {
    fill: ${props => props.styles.static.svgColor};
  }
  &:hover {
    background-color: ${props => props.styles.hover.backgroundColor};
    path {
      fill: ${props => props.styles.hover.svgColor};
    }
  }
`;

export type IProps = {
  icon: string;
  styleType: ButtonStyleType;
  size: ButtonSizeType;
} & React.HTMLAttributes<HTMLButtonElement>;

const IconButton: SFC<IProps> = ({ icon, styleType, size, ...props }) => {
  const styles = getStyle(styleType, size, DeskproAdminTheme);
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <ButtonStyled styles={styles} {...props}>
        <Icon name={icon} />
      </ButtonStyled>
    </ThemeProvider>
  );
};

export default IconButton;