import React, { ReactNode } from 'react';
import { shallow } from '../../test/enzyme';

import Drawer from './Drawer';

jest.mock('react-dom', () => ({
  createPortal: (node: ReactNode) => node
}));

describe('Drawer', () => {

  test('renders a <div> root', () => {

    const root = shallow(<Drawer open={true} onClose={() => { }} />);
    expect(root.length).toEqual(1);

  });

});