import React from 'react';
import { mount, shallow } from '../../../test/enzyme';
import { WrapperType } from '../../../test/types';

import Values, { Props, getComponent } from './Values';

jest.mock('./ValueTypes/Text', () => ()=> <div id='MockText'>Text</div>);
jest.mock('./ValueTypes/ChoiceFromData', () => ()=> <div id='MockChoiceFromData'>ChoiceFromData</div>);

const commonProps: Props & { containType: string } = {
  containType: 'TEXT',
  filterValue: [''],
  filters: [],
  index: 0,
  setFilterValue: jest.fn(),
  uniqueValues: []
};

describe('getComponent', () => {


  test('type TEXT, renders Text component', () => {

    const props: Props & { containType: string } = {
      ...commonProps
    };

    const root = shallow(getComponent('TEXT', props));
    expect(root.find('#MockText').length).toEqual(1);
    root.unmount();
  });

  test('type CHOICE_FROM_DATA, renders Text component', () => {

    const props: Props & { containType: string } = {
      ...commonProps
    };

    const root = shallow(getComponent('CHOICE_FROM_DATA', props));
    expect(root.find('#MockChoiceFromData').length).toEqual(1);
    root.unmount();
  });

});

describe('Values', () => {

  const wrapper = (bShallow: boolean, props: Props & { containType: string }): WrapperType => {
    return bShallow
      ? shallow(<Values {...props} />)
      : mount(<Values {...props} />);
  };

  test('type TEXT, renders Text component', () => {

    const props: Props & { containType: string } = {
      ...commonProps
    };

    const root = wrapper(false, props);
    expect(root.find('#MockText').length).toEqual(1);
    root.unmount();
  });

  test('type CHOICE_FROM_DATA, renders MockChoiceFromData component', () => {

    const props: Props & { containType: string } = {
      ...commonProps,
      containType: 'CHOICE_FROM_DATA',
    };

    const root = wrapper(false, props);
    expect(root.find('#MockChoiceFromData').length).toEqual(1);
    root.unmount();
  });

  test('If 1 filter and if delete on button pressed, setFilter called to be set to blank filter', () => {

    const setFilters = jest.fn();
    const setFilterValue = jest.fn();

    const props: Props & { containType: string } = {
      ...commonProps,
      setFilterValue,
      setFilters
    };

    const root = wrapper(false, props);
    const button = root.find('button');
    button.simulate('click');
    expect(setFilters).toHaveBeenCalledWith([{ property: '', operatorName: '', value: [''] }]);
    root.unmount();
  });

  test('If more than one filter and if delete on button pressed, unused filter is removed', () => {

    const setFilters = jest.fn();
    const setFilterValue = jest.fn();
    const currentFilter = { property: 'name', operatorName: 'EQUALS', value: ['Richard'] };

    const props: Props & { containType: string } = {
      ...commonProps,
      filters: [
        { ...currentFilter},
        { property: 'email', operatorName: 'EQUALS', value: ['test@test.com'] }
      ],
      filter: currentFilter,
      setFilterValue,
      setFilters
    };

    const root = wrapper(false, props);
    const button = root.find('button');
    button.simulate('click');
    expect(setFilters).toHaveBeenCalledWith([
        { property: 'email', operatorName: 'EQUALS', value: ['test@test.com'] }
    ]);
    root.unmount();
  });

  test('If filter not found in filters, skip delete process', () => {

    const setFilters = jest.fn();
    const currentFilter = { property: 'name', operatorName: 'EQUALS', value: ['Richard'] };

    const props: Props & { containType: string } = {
      ...commonProps,
      filter: currentFilter,
      filters:[{ property: 'email', operatorName: 'EQUALS', value: ['test@test.com'] }],
      setFilters
    };

    const root = wrapper(false, props);
    const button = root.find('button');
    button.simulate('click');
    expect(setFilters).toHaveBeenCalledWith([
      { property: 'email', operatorName: 'EQUALS', value: ['test@test.com'] }
    ]);
    root.unmount();
  });

  test('If setFilters, skip deletion process', () => {

    const setFilters = jest.fn();

    const props: Props & { containType: string } = {
      ...commonProps,
      setFilters: undefined
    };

    const root = wrapper(false, props);
    const button = root.find('button');
    button.simulate('click');
    expect(setFilters).not.toHaveBeenCalled();
    root.unmount();
  });
});
