import { ButtonStyleType, IButtonStyle } from './types';
import { SizeTypes } from '../../types';
import { DeskproAdminThemeType } from '../../style/DeskproAdminTheme';

const primary = (theme: DeskproAdminThemeType, size: number) => {
  return {
    static: {
      backgroundColor: theme.activeColour,
      color: theme.white,
      svgColor: theme.white,
      size
    },
    hover: {
      backgroundColor: theme.brandPrimary,
      color: theme.white,
      svgColor: theme.white,
      size
    }
  };
};
const tertiary = (theme: DeskproAdminThemeType, size: number) => {
  return {
    static: {
      backgroundColor: theme.white,
      color: theme.greyDark,
      svgColor: theme.static2Colour,
      size,
      border: `1px solid ${theme.greyLight}`
    },
    hover: {
      backgroundColor: theme.hoverColour,
      color: theme.activeColour,
      svgColor: theme.activeColour,
      size,
      border: `1px solid ${theme.activeColour}`
    }
  };
};

const imageButton = (
  theme: DeskproAdminThemeType,
  size: number,
  imageBtnSelected?: boolean,
) => {
  return {
    static: {
      backgroundColor: imageBtnSelected
        ? 'rgba(232, 235, 238, 1)'
        : theme.white,
      color: theme.staticColour,
      svgColor: theme.white,
      size,
      border: `none`
    },
    hover: {
      backgroundColor: imageBtnSelected
        ? 'rgba(232, 235, 238, 1)'
        : 'rgba(232, 235, 238, 0.5)',
      color: theme.staticColour,
      svgColor: theme.white,
      size,
      border: `none`
    }
  };
};

const danger = (theme: DeskproAdminThemeType, size: number) => {
  return {
    static: {
      backgroundColor: theme.danger,
      color: theme.white,
      svgColor: theme.white,
      size,
      border: `1px solid ${theme.danger}`
    },
    hover: {
      backgroundColor: theme.danger,
      color: theme.white,
      svgColor: theme.white,
      size,
      border: `1px solid ${theme.danger}`
    }
  };
};

const smallStyle = (
  theme: DeskproAdminThemeType,
  imageBtnSelected?: boolean
) => {
  const styles = {
    primary: primary(theme, 28),
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
    tertiary: tertiary(theme, 28),
    danger: danger(theme, 28),
    imageButton: imageButton(theme, 28, imageBtnSelected)
  };
  return styles;
};

const mediumStyle = (
  theme: DeskproAdminThemeType,
  imageBtnSelected?: boolean
) => {
  const styles = {
    primary: primary(theme, 34),
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
    tertiary: tertiary(theme, 34),
    danger: danger(theme, 34),
    imageButton: imageButton(theme, 34, imageBtnSelected)
  };
  return styles;
};

export const getStyle = (
  styleType: ButtonStyleType,
  size: SizeTypes,
  theme: DeskproAdminThemeType,
  imageBtnSelected?: boolean
): IButtonStyle => {
  const styles = {
    small: smallStyle(theme, imageBtnSelected),
    medium: mediumStyle(theme, imageBtnSelected)
  };
  if (!size) {
    size = 'small';
  }
  return styles[size][styleType];
};
