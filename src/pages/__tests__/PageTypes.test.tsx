import React from 'react';
import StandardTablePage from '../StandardTablePage';
import { getPageComponent }  from '../PageType';
import { IProps } from '../types';

jest.mock('../../pages', () => ({
  RouteToPage: {}
}));

describe('PageType', () => {

  describe('getPageComponent', () => {

    test('returns page component of StandardTablePage if type `StandardTablePage`', () => {
      const props: IProps = {
        path: '/test',
        paths: null,
        pageType: 'StandardDataPage'
      };

      const Component = getPageComponent(props);

      expect(Component).toEqual(<StandardTablePage path='/test' paths={null} />);
    });

    // test('returns value of prop if found on RouteToPage', () => {
    //   const props: IProps = {
    //     path: '/valid',
    //     pageType: null
    //   };

    //   const Component = getPageComponent(props);
    //   expect(Component.find('div').length).toEqual(1);
    // });

    test('returns 404 if path not found in RouteToPage', () => {
      const props: IProps = {
        path: '/test',
        paths: [],
        pageType: null
      };

      const Component = getPageComponent(props);
      expect(Component).toEqual(<div>404</div>);
    });
  });
});
