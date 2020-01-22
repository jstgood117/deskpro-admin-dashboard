import React, { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import DrawerType from '../DrawerType';
import { mount } from '../../test/enzyme';

jest.mock('../../components/Drawer/Forms/EditAgentForm',
  () => () => <div id='EditAgentForm'>Text</div>
);

jest.mock('react-dom', () => ({
  createPortal: (node: ReactNode) => node
}));

describe('DrawerType', () => {
  describe('returns correct child compononet', () => {
    test('`EditAgentForm` => <EditAgentForm />', () => {
      const root = mount(
        <MemoryRouter>
          <DrawerType
            pageType='EditAgentForm'
            path='/'
            metadataQuery=''
          />
        </MemoryRouter>
      );

      expect(root.find('#EditAgentForm').length).toEqual(1);
      root.unmount();
    });
  });
});