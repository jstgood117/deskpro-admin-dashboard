import { css } from 'styled-components';

export const fontFaces = css`
  @font-face {
    font-family: 'LatoBold';
    src: url(${require('../assets/fonts/Lato/fonts/Lato-Bold.woff2')})
        format('woff2'),
      url(${require('../assets/fonts/Lato/fonts/Lato-Bold.woff')})
        format('woff'),
      url(${require('../assets/fonts/Lato/fonts/Lato-Bold.ttf')})
        format('truetype');
    font-style: normal;
    font-weight: bold;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-BoldItalic */
  @font-face {
    font-family: 'LatoBoldItalic';
    src: url(${require('../assets/fonts/Lato/fonts/Lato-BoldItalic.woff2')})
        format('woff2'),
      url(${require('../assets/fonts/Lato/fonts/Lato-BoldItalic.woff')})
        format('woff'),
      url(${require('../assets/fonts/Lato/fonts/Lato-BoldItalic.ttf')})
        format('truetype');
    font-style: italic;
    font-weight: bold;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-Italic */
  @font-face {
    font-family: 'LatoItalic';
    src: url(${require('../assets/fonts/Lato/fonts/Lato-Italic.woff2')})
        format('woff2'),
      url(${require('../assets/fonts/Lato/fonts/Lato-Italic.woff')})
        format('woff'),
      url(${require('../assets/fonts/Lato/fonts/Lato-Italic.ttf')})
        format('truetype');
    font-style: italic;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-Light */
  @font-face {
    font-family: 'LatoLight';
    src: url(${require('../assets/fonts/Lato/fonts/Lato-Light.woff2')})
        format('woff2'),
      url(${require('../assets/fonts/Lato/fonts/Lato-Light.woff')})
        format('woff'),
      url(${require('../assets/fonts/Lato/fonts/Lato-Light.ttf')})
        format('truetype');
    font-style: normal;
    font-weight: lighter;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-LightItalic */
  @font-face {
    font-family: 'LatoLightItalic';
    src: url(${require('../assets/fonts/Lato/fonts/Lato-LightItalic.woff2')})
        format('woff2'),
      url(${require('../assets/fonts/Lato/fonts/Lato-LightItalic.woff')})
        format('woff'),
      url(${require('../assets/fonts/Lato/fonts/Lato-LightItalic.ttf')})
        format('truetype');
    font-style: italic;
    font-weight: lighter;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-Medium */
  @font-face {
    font-family: 'Lato';
    src: url(${require('../assets/fonts/Lato/fonts/Lato-Medium.woff2')})
        format('woff2'),
      url(${require('../assets/fonts/Lato/fonts/Lato-Medium.woff')})
        format('woff'),
      url(${require('../assets/fonts/Lato/fonts/Lato-Medium.ttf')})
        format('truetype');
    font-style: normal;
    font-weight: 500;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-MediumItalic */
  @font-face {
    font-family: 'Lato';
    src: url(${require('../assets/fonts/Lato/fonts/Lato-MediumItalic.woff2')})
        format('woff2'),
      url(${require('../assets/fonts/Lato/fonts/Lato-MediumItalic.woff')})
        format('woff'),
      url(${require('../assets/fonts/Lato/fonts/Lato-MediumItalic.ttf')})
        format('truetype');
    font-style: italic;
    font-weight: 500;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-Regular */
  @font-face {
    font-family: 'Lato';
    src: url(${require('../assets/fonts/Lato/fonts/Lato-Regular.woff2')})
        format('woff2'),
      url(${require('../assets/fonts/Lato/fonts/Lato-Regular.woff')})
        format('woff'),
      url(${require('../assets/fonts/Lato/fonts/Lato-Regular.ttf')})
        format('truetype');
    font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-Semibold */
  @font-face {
    font-family: 'LatoSemibold';
    src: url(${require('../assets/fonts/Lato/fonts/Lato-Semibold.woff2')})
        format('woff2'),
      url(${require('../assets/fonts/Lato/fonts/Lato-Semibold.woff')})
        format('woff'),
      url(${require('../assets/fonts/Lato/fonts/Lato-Semibold.ttf')})
        format('truetype');
    font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-SemiboldItalic */
  @font-face {
    font-family: 'LatoSemiboldItalic';
    src: url(${require('../assets/fonts/Lato/fonts/Lato-SemiboldItalic.woff2')})
        format('woff2'),
      url(${require('../assets/fonts/Lato/fonts/Lato-SemiboldItalic.woff')})
        format('woff'),
      url(${require('../assets/fonts/Lato/fonts/Lato-SemiboldItalic.ttf')})
        format('truetype');
    font-style: italic;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-Thin */
  @font-face {
    font-family: 'LatoThin';
    src: url(${require('../assets/fonts/Lato/fonts/Lato-Thin.woff2')})
        format('woff2'),
      url(${require('../assets/fonts/Lato/fonts/Lato-Thin.woff')})
        format('woff'),
      url(${require('../assets/fonts/Lato/fonts/Lato-Thin.ttf')})
        format('truetype');
    font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-ThinItalic */
  @font-face {
    font-family: 'LatoThinItalic';
    src: url(${require('../assets/fonts/Lato/fonts/Lato-ThinItalic.woff2')})
        format('woff2'),
      url(${require('../assets/fonts/Lato/fonts/Lato-ThinItalic.woff')})
        format('woff'),
      url(${require('../assets/fonts/Lato/fonts/Lato-ThinItalic.ttf')})
        format('truetype');
    font-style: italic;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Rubik-Regular */
  @font-face {
    font-family: 'Rubik';
    src: url(${require('../assets/fonts/Rubik/Rubik-Regular.ttf')})
      format('truetype');
    font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Rubik-Italic */
  @font-face {
    font-family: 'RubikItalic';
    src: url(${require('../assets/fonts/Rubik/Rubik-Italic.ttf')})
      format('truetype');
    font-style: normal;
    font-weight: italic;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Rubik-Medium */
  @font-face {
    font-family: 'Rubik';
    src: url(${require('../assets/fonts/Rubik/Rubik-Medium.ttf')})
      format('truetype');
    font-style: normal;
    font-weight: 500;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Rubik-Medium-Italic */
  @font-face {
    font-family: 'Rubik';
    src: url(${require('../assets/fonts/Rubik/Rubik-MediumItalic.ttf')})
      format('truetype');
    font-style: italic;
    font-weight: 500;
    text-rendering: optimizeLegibility;
  }
  /* Webfont: Rubik-Light */
  @font-face {
    font-family: 'RubikLight';
    src: url(${require('../assets/fonts/Rubik/Rubik-Light.ttf')})
      format('truetype');
    font-style: normal;
    font-weight: lighter;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Rubik-Light-Italic */
  @font-face {
    font-family: 'RubikLightItalic';
    src: url(${require('../assets/fonts/Rubik/Rubik-LightItalic.ttf')})
      format('truetype');
    font-style: italic;
    font-weight: lighter;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Rubik-Bold */
  @font-face {
    font-family: 'RubikBold';
    src: url(${require('../assets/fonts/Rubik/Rubik-Bold.ttf')})
      format('truetype');
    font-style: normal;
    font-weight: bold;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Rubik-Bold-Italic */
  @font-face {
    font-family: 'RubikBoldItalic';
    src: url(${require('../assets/fonts/Rubik/Rubik-BoldItalic.ttf')})
      format('truetype');
    font-style: italic;
    font-weight: bold;
    text-rendering: optimizeLegibility;
  }
  /* Webfont: Source-Code-Pro */
  @font-face {
    font-family: 'Source CODE Pro';
    src: url(${require('../assets/fonts/SourceCodePro/SourceCodePro-Regular.ttf')})
      format('truetype');
    font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }
`;
