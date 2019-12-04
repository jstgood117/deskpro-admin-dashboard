import React, { FC, ReactNode, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../../Theme';
import Button from '../Button';
import Icon from '../../Icon';
import { DeskproAdminThemeType } from '../../../style/DeskproAdminTheme';
import DropdownButton from '../DropdownButton';
import { ISizeTypes } from '../../../resources/interfaces';

type ButtonStyleType = 'primary' | 'secondary';
type DropdownContentPosition = 'right' | 'left';

interface IButtonStyle {
  static: {
    backgroundColor: string;
    color: string;
    svgColor: string;
    border: string;
    betweenBorder: string;
  };
  hover: {
    backgroundColor: string;
    color: string;
    svgColor: string;
    border: string;
    betweenBorder: string;
  };
}

export interface IProps {
  children?: ReactNode;
  styleType: ButtonStyleType;
  contentPosistion?: DropdownContentPosition;
  size?: ISizeTypes;
  icon?: string;
  handleSelect: (e: any) => void;
}

interface IStyleWrapper {
  styles: IButtonStyle;
}
interface IStyleProp {
  contentPosistion?: DropdownContentPosition;
  size?: ISizeTypes;
}
const SortItems = [
  { label: 'Add Agent', link: 'Sort1' },
  { label: 'Bulk Add Agent', link: 'Sort2' }
];

const WithDropdownStyle = styled.div<IStyleWrapper & IStyleProp>`
  display: inline-flex;
  position: relative;
  border-radius: ${props => props.theme.btnBorderRadius}
  border: ${props => props.styles.static.border};
  button {
    background: ${props => props.styles.static.backgroundColor};
    color: ${props => props.styles.static.color};
    path {
      fill: ${props => props.styles.static.color};
    }
  }
  .leftBtn {
    button {
      border: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      &:hover {
        background: ${props => props.styles.hover.backgroundColor}cc;
      }
    }
  }
  .rightBtn {
    border-left: ${props => props.styles.static.betweenBorder};
    position: unset;
    button {
      border: none;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      &:hover {
        background: ${props => props.styles.hover.backgroundColor}cc;
      }
    }
    .dropdownContent {
      top: ${props => (props.size === 'medium' ? 34 : 28)}px;
      right: ${props => (props.contentPosistion === 'left' ? 'auto' : 0)};
      left: ${props => (props.contentPosistion === 'left' ? 0 : 'auto')};
    }
  }
  &:hover {
    button {
      color: ${props => props.styles.hover.color};
      background: ${props => props.styles.hover.backgroundColor};
      path {
        fill: ${props => props.styles.hover.color};
      }
    }
    border: ${props => props.styles.hover.border};
    .rightBtn {
      border-left: ${props => props.styles.hover.betweenBorder};
    }
  }
`;

const getStyle = (
  styleType: ButtonStyleType,
  theme: DeskproAdminThemeType
): IButtonStyle => {
  const styles = {
    primary: {
      static: {
        backgroundColor: theme.activeColour,
        color: theme.white,
        svgColor: theme.white,
        border: 'none',
        betweenBorder: `2px solid ${theme.hoverColour}`
      },
      hover: {
        backgroundColor: theme.brandPrimary,
        color: theme.white,
        svgColor: theme.white,
        border: 'none',
        betweenBorder: `2px solid ${theme.lightBlue}`
      }
    },
    secondary: {
      static: {
        backgroundColor: theme.textHover,
        color: theme.greyDark,
        svgColor: theme.activeColour,
        border: `1px solid ${theme.greyLight}`,
        betweenBorder: `1px solid ${theme.greyLight}`
      },
      hover: {
        backgroundColor: theme.hoverColour,
        color: theme.activeColour,
        svgColor: theme.activeColour,
        border: `1px solid ${theme.activeColour}`,
        betweenBorder: `1px solid ${theme.activeColour}`
      }
    }
  };
  return styles[styleType];
};

const WithDropdownButton: FC<IProps> = props => {
  const [, setValue] = useState();
  const styles = getStyle(props.styleType, DeskproAdminTheme);
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <WithDropdownStyle
        styles={styles}
        size={props.size}
        contentPosistion={props.contentPosistion}
      >
        <Button
          className='leftBtn'
          styleType={props.styleType}
          onClick={() => {
            props.handleSelect(SortItems[0]);
          }}
          size={props.size}
          iconOnly={!props.children}
        >
          {props.icon && <Icon name={props.icon} />}
          {props.children}
        </Button>
        <DropdownButton
          className='rightBtn'
          items={SortItems}
          size={props.size}
          styleType={props.styleType}
          iconOnly={true}
          setValue={val => {
            setValue(val);
          }}
        />
      </WithDropdownStyle>
    </ThemeProvider>
  );
};

export default WithDropdownButton;
