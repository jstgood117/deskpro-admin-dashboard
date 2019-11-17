
type FontFamilyType = string;

const fontFamily =
  'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif' as FontFamilyType;

type FontType = {
  fontFamily?: FontFamilyType;
  fontStyle?: string;
  fontWeight?: number | string;
  fontSize?: string;
  lineHeight?: string;
  color?: string;
};

export type DeskproAdminThemeType = {
  mainFont: string,
  headerFont: string;
  btnBorderRadius: string;
  staticColour: string;
  textHover: string;
  brandPrimary: string;
  activeColour: string;
  primaryHoverColour: string;
  hoverColour: string;
  secondaryColour: string;
  greyDark: string;
  static2Colour: string;
  greyLight: string;
  greyLighter: string;
  greyLightest: string;
  lightBlue: string;
  warningColour: string;
  successColour: string;
  pageHeader: string;
  white: string;
  black: string;
  pagePadding: string;
  danger: string;
  dangerLight: string;

  h1: FontType;
  h2: FontType;
  h3: FontType;
  h4: FontType;
  h5: FontType;
  h6: FontType;

  p1: FontType;
  p2: FontType;
  p3: FontType;

  s1: FontType;
  s2: FontType;
};

const DeskproAdminTheme: DeskproAdminThemeType = {
  mainFont: fontFamily,
  headerFont: fontFamily,

  btnBorderRadius: '4px',

  staticColour: '#4c4f50',
  textHover: '#E8EBEE',
  brandPrimary: '#3a8dde',
  activeColour: '#1C3E55',
  primaryHoverColour: '#3A8DDE',
  hoverColour: '#D2D8DD',
  secondaryColour: '#fff',
  greyDark: '#8B9293',
  static2Colour: '#A9B0B0',
  greyLight: '#D3D6D7',
  greyLighter: '#EFF0F0',
  greyLightest: '#F7F7F7',
  lightBlue: '#9FCCF3',
  warningColour: '#FD667F',
  successColour: '#5BB6B1',
  pageHeader: '#E1EEFB',
  white: '#FFFFFF',
  black: '#000',
  pagePadding: '34px',
  danger: '#E84954',
  dangerLight: '#FBE1E3',

  h1: {
    fontFamily,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '28px',
    lineHeight: '150%',
    color: '#4C4F50'
  },
  h2: {
    fontFamily,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '150%',
    color: '#4C4F50'
  },
  h3: {
    fontFamily,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '150%',
    color: '#4C4F50'
  },
  h4: {
    fontFamily,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '150%',
    color: '#4C4F50'
  },
  h5: {
    fontFamily,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '150%',
    color: '#4C4F50'
  },
  h6: {
    fontFamily,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '15px',
    lineHeight: '150%',
    color: '#4C4F50'
  },
  p1: {
    fontFamily,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '150%',
    color: '#4C4F50'
  },
  p2: {
    fontFamily,
    fontSize: '14px',
    lineHeight: '150%',
    color: '#4C4F50'
  },
  p3: {
    fontFamily,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '150%',
    color: '#8B9293'
  },
  s1: {
    fontFamily,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '150%',
    color: '#4C4F50'
  },
  s2: {
    fontFamily,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '150%',
    color: '#4C4F50'
  }
};

export default DeskproAdminTheme;
