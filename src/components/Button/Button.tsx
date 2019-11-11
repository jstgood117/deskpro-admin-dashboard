import React, { ReactNode, SFC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { isNil } from 'lodash';

import { DeskproAdminTheme } from '../Theme';
import { dpstyle } from '../Styled';
import { H6 } from '../Typography';
import Icon from '../Icon';

type ButtonStyleType = 'primary' | 'secondary' | 'tertiary' | 'danger';
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
          border: `1px solid ${theme.activeColour}`
        },
        hover: {
          backgroundColor: theme.hoverColour,
          color: theme.activeColour,
          svgColor: theme.activeColour,
          size: 28,
          border: `1px solid ${theme.activeColour}`
        }
      },
      tertiary: {
        static: {
          backgroundColor: theme.white,
          color: theme.greyDark,
          svgColor: theme.static2Colour,
          size: 28,
          border: `1px solid ${theme.greyLight}`
        },
        hover: {
          backgroundColor: theme.hoverColour,
          color: theme.activeColour,
          svgColor: theme.activeColour,
          size: 28,
          border: `1px solid ${theme.activeColour}`
        }
      },
      danger: {
        static: {
          backgroundColor: theme.danger,
          color: theme.white,
          svgColor: theme.white,
          size: 28,
          border: `1px solid ${theme.danger}`
        },
        hover: {
          backgroundColor: theme.danger,
          color: theme.white,
          svgColor: theme.white,
          size: 28,
          border: `1px solid ${theme.danger}`
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
          svgColor: theme.static2Colour,
          size: 34,
          border: `1px solid ${theme.greyLight}`
        },
        hover: {
          backgroundColor: theme.hoverColour,
          color: theme.activeColour,
          svgColor: theme.activeColour,
          size: 34,
          border: `1px solid ${theme.activeColour}`
        }
      },
      tertiary: {
        static: {
          backgroundColor: theme.white,
          color: theme.greyDark,
          svgColor: theme.static2Colour,
          size: 34,
          border: `1px solid ${theme.greyLight}`
        },
        hover: {
          backgroundColor: theme.hoverColour,
          color: theme.activeColour,
          svgColor: theme.activeColour,
          size: 34,
          border: `1px solid ${theme.activeColour}`
        }
      },
      danger: {
        static: {
          backgroundColor: theme.danger,
          color: theme.white,
          svgColor: theme.white,
          size: 34,
          border: `1px solid ${theme.danger}`
        },
        hover: {
          backgroundColor: theme.danger,
          color: theme.white,
          svgColor: theme.white,
          size: 34,
          border: `1px solid ${theme.danger}`
        }
      }
    }
  };
  if (!size) {
    size = 'small';
  }
  return styles[size][styleType];
};

interface IHasButtonType {
  hasClearButton: boolean;
}
const ClearButton = styled(dpstyle.button)<IHasButtonType>`
  outline: none;
  width: 30px;
  align-items: center;
  justify-content: center;
  display: flex;
  border: 1px solid ${props => props.theme.activeColour};
  margin-left: -1px;
  border-top-left-radius: ${props => (props.hasClearButton ? 0 : 4)}px;
  border-bottom-left-radius: ${props => (props.hasClearButton ? 0 : 4)}px;
  path {
    fill: ${props => props.theme.activeColour};
  }
`;

interface IButtonStyleProp {
  styles: IButtonStyle;
  hasClearButton: boolean;
  iconOnly: boolean;
}
const ButtonStyled = styled(dpstyle.button)<IButtonStyleProp>`
  background-color: ${props => props.styles.static.backgroundColor};
  color: ${props => props.styles.static.color};
  border: ${props => props.styles.static.border};
  height: ${props => props.styles.static.size}px;
  width: ${props => props.iconOnly && props.styles.static.size}px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  border-top-right-radius: ${props => (props.hasClearButton ? 0 : 4)}px;
  border-bottom-right-radius: ${props => (props.hasClearButton ? 0 : 4)}px;
  padding: ${props => props.iconOnly && 0};
  path {
    fill: ${props => props.styles.static.svgColor};
  }
  svg:nth-child(1) {
    padding-right: ${props => !props.iconOnly && 8}px;
    margin: auto;
  }
  svg:nth-child(2) {
    padding-left: ${props => !props.iconOnly && 8}px;
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

const DropdownContent = styled(dpstyle.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: ${props => props.theme.white};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: -1px;
  left: -1px;
  width: 100%;
`;

const DropdownContentPanel = styled(dpstyle.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 0;
`;

const DropdownContentLink = styled(H6)`
  float: none;
  padding: 7px 15px;
  height: 31px;
  text-decoration: none;
  text-align: left;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.textHover};
  }
  z-index: 1;
`;

const ButtonWrapper = styled(dpstyle.div)<IHasButtonType>`
  display: inline-flex;
  position: relative;
  .selected {
    &:hover {
      background-color: ${props => props.theme.hoverColour};
    }
    color: ${props => props.theme.activeColour};
    border-color: ${props => props.theme.activeColour};
    background-color: ${props =>
      props.hasClearButton ? props.theme.hoverColour : props.theme.white};
    path {
      fill: ${props => props.theme.activeColour};
    }
  }
`;

export interface IItemProps {
  label?: string;
  link: string;
}

export type IProps = {
  children?: ReactNode;
  styleType: ButtonStyleType;
  size?: ButtonSizeType;
  opened?: boolean;
  items?: IItemProps[] | any;
  showClearButton?: boolean;
  renderItem?: (item: any, index: number) => React.ReactElement;
  onClear?: () => void;
  onClick?: () => void;
  onSelect?: (value: IItemProps) => void;
  dropdownValue?: any;
  iconOnly?: boolean;
  className?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

const Button: SFC<IProps> = ({
  styleType,
  size,
  showClearButton,
  renderItem,
  onClear,
  items,
  opened,
  onClick,
  onSelect,
  children,
  dropdownValue,
  iconOnly,
  className
}) => {
  const styles = getStyle(styleType, size, DeskproAdminTheme);
  const selected = !isNil(dropdownValue) && dropdownValue !== '';
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <ButtonWrapper
        hasClearButton={showClearButton && selected}
        className={`${className?className:''}`}
      >
        <ButtonStyled
          styles={styles}
          className={`${selected ? 'selected' : ''}`}
          onClick={onClick}
          hasClearButton={showClearButton && selected}
          iconOnly={iconOnly}
        >
          {children}
        </ButtonStyled>
        {items && items.length > 0 && opened && (
          <DropdownContent onClick={onClick} className='dropdownContent'>
            {items.map((item: IItemProps, index: number) => {
              return renderItem ? (
                renderItem(item, index)
              ) : (
                <DropdownContentLink
                  key={index}
                  onClick={() => onSelect && onSelect(item)}
                >
                  {item.label ? item.label : item.link}
                </DropdownContentLink>
              );
            })}
            <DropdownContentPanel />
          </DropdownContent>
        )}
        {items && items.length > 0 && showClearButton && selected && (
          <ClearButton
            className={`${selected ? 'selected' : ''}`}
            onClick={event => {
              event.stopPropagation();
              if (onClear) {
                onClear();
              }
            }}
            hasClearButton={showClearButton && selected}
          >
            <Icon name='close' />
          </ClearButton>
        )}
      </ButtonWrapper>
    </ThemeProvider>
  );
};

export default Button;
