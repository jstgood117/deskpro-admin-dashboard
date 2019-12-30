import React from 'react';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import Radio from './Radio';
import { DeskproAdminTheme } from '../Theme';

describe('Pagination', () => {
  let mountedRadio: any;
  const RadioComponent: React.FC = () => {
    const [option, setOption] = React.useState('');

    return (
      <Radio
        id='value1'
        value='value1'
        setOption={(val: any) => setOption(val)}
        option={option}
      />
    );
  };

  const wrapper = (bShallow: boolean) => {
    if (!mountedRadio) {
      mountedRadio = bShallow
        ? shallow(
            <ThemeProvider theme={DeskproAdminTheme}>
              <RadioComponent />
            </ThemeProvider>
          )
        : mount(
            <ThemeProvider theme={DeskproAdminTheme}>
              <RadioComponent />
            </ThemeProvider>
          );
    }
    return mountedRadio;
  };
  beforeEach(() => {
    mountedRadio = undefined;
  });

  it('always renders <div>', () => {
    expect(wrapper(false).find('div').length).toBeGreaterThan(0);
  });
});
