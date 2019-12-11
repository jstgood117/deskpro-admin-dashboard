import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { storiesOf } from '@storybook/react';
import { DeskproAdminTheme } from '../Theme';

const Container = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;

const ColorPalleteView = styled.div<{ backgroundColor: string }>`
  background-color: ${props => props.theme[props.backgroundColor]};
  width: 50px;
  height: 50px;
  border-radius: 8px;
  margin-right: 10px;
`;

const ColorPallete: React.FC<{ backgroundColor: string }> = ({
  backgroundColor
}) => {
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <Container>
        <ColorPalleteView backgroundColor={backgroundColor} />
        {backgroundColor}
      </Container>
    </ThemeProvider>
  );
};

storiesOf('Colour Palette', module).add('colour palette', () => (
  <React.Fragment>
    <ColorPallete backgroundColor='staticColour' />
    <ColorPallete backgroundColor='textHover' />
    <ColorPallete backgroundColor='brandPrimary' />
    <ColorPallete backgroundColor='activeColour' />
    <ColorPallete backgroundColor='hoverColour' />
    <ColorPallete backgroundColor='secondaryColour' />
    <ColorPallete backgroundColor='greyDark' />
    <ColorPallete backgroundColor='static2Colour' />
    <ColorPallete backgroundColor='greyLight' />
    <ColorPallete backgroundColor='greyLighter' />
    <ColorPallete backgroundColor='greyLightest' />
    <ColorPallete backgroundColor='lightBlue' />
    <ColorPallete backgroundColor='warningColour' />
    <ColorPallete backgroundColor='successColour' />
    <ColorPallete backgroundColor='pageHeader' />
  </React.Fragment>
));