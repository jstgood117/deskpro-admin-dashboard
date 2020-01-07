import React from 'react';
import { mount, shallow } from '../../../test/enzyme';
import { WrapperType } from '../../../test/types';

import Values, { Props } from './Values';

jest.mock('./ValueTypes/Text', () => ()=> <div id='MockText'>Text</div>);
jest.mock('./ValueTypes/ChoiceFromData', () => ()=> <div id='MockChoiceFromData'>ChoiceFromData</div>);

describe('Values', () => {

  const wrapper = (bShallow: boolean, props: Props): WrapperType => {
    return bShallow
      ? shallow(<Values {...props} />)
      : mount(<Values {...props} />);
  };

  test('type TEXT, renders Text component', () => {

    const props: Props = {
      containType: 'TEXT',
      filterValue: '',
      filters: [],
      index: 0,
      uniqueValues:[],
      setFilterValue: jest.fn()
    };

    const root = wrapper(false, props);
    expect(root.find('#MockText').length).toEqual(1);
    root.unmount();
  });

  test('type CHOICE_FROM_DATA, renders MockChoiceFromData component', () => {

    const props: Props = {
      containType: 'CHOICE_FROM_DATA',
      filterValue: '',
      filters: [],
      index: 0,
      uniqueValues:[],
      setFilterValue: jest.fn()
    };

    const root = wrapper(false, props);
    expect(root.find('#MockChoiceFromData').length).toEqual(1);
    root.unmount();
  });
});
