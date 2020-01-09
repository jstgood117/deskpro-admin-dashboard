import React, { ReactNode } from 'react';
import DrawerType from '../DrawerType';
import { mount } from '../../test/enzyme';

jest.mock('../../components/Drawer/Forms/EditAgentForm',
  () => ()=> <div id='EditAgentForm'>Text</div>
);

jest.mock('react-dom', () => ({
  createPortal: (node: ReactNode) => node
}));

describe('DrawerType', () => {
  describe('returns correct child compononet', () => {
    test('`EditAgentForm` => <EditAgentForm />', () => {
      const root = mount(
        <DrawerType
          pageType='EditAgentForm'
          path='/'
          metadataQuery=''
        />
      );

      expect(root.find('#EditAgentForm').length).toEqual(1);
      root.unmount();
    });
  });
});