import React from 'react';

import { storiesOf } from '@storybook/react';
import { H1, H2, H3, H4, H5, H6, P1, P2, S1, S2 } from './index';

storiesOf('Typography', module).add('typography', () => (
  <React.Fragment>
    <H1>H1 - Rubik Medium 28pt</H1>
    <H2>H2 - Rubik Regular 18pt</H2>
    <H3>H3 - Rubik Regular 16pt</H3>
    <H4>H4 - Rubik Medium 16pt</H4>
    <H5>H5 - Rubik Regular 15pt</H5>
    <H6>H6 - Rubik Medium 15pt</H6>
    <P1>P1 - Lato Regular 14pt</P1>
    <P2>P2 - Lato Semibold 14pt</P2>
    <S1>S1 - Lato Bold 12pt</S1>
    <S2>S2 - Lato Regular 12pt</S2>
  </React.Fragment>
));
