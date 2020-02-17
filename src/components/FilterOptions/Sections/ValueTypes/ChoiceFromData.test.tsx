import React from 'react';
import { Props } from './types';

import ChoiceFromData, {
  formatToIOptionsFormat,
  formatFlatArrayFormat
} from './ChoiceFromData';

import { mount, shallow } from '../../../../test/enzyme';
import { WrapperType } from '../../../../test/types';

describe('ChoiceFromData', () => {

  const wrapper = (bShallow: boolean, props: Props): WrapperType => {
    if (bShallow){
      return shallow(<ChoiceFromData {...props} />);
    }

    return mount(<ChoiceFromData {...props} />);
  };

  test('renders <MultiSelect> tag at ChoiceFromData', () => {
    const props: Props = {
      filterValue: ['no'],
      filters: [{operatorName:'EQUAL', property: 'can_admin', value:['no']}],
      index: 0,
      setFilterValue: jest.fn(),
      uniqueValues: []
    };

    const root = wrapper(true, props);
    expect(root.find('MultiSelect').length).toEqual(1);
    root.unmount();
  });
});

describe('formatToIOptionsFormat', () => {
  test('returns empty array if uniqueValues not valid', () => {
    const result = formatToIOptionsFormat(undefined);
    expect(result).toEqual([]);
  });

  test('converts string array into IOptions format', () => {
    const result = formatToIOptionsFormat(['test1', 'test2', 'test3']);
    expect(result).toEqual([{
      value: 'test1',
      label: 'test1'
    }, {
      value: 'test2',
      label: 'test2'
    }, {
      value: 'test3',
      label: 'test3'
    }]);
  });
});

describe('formatFlatArrayFormat', () => {
  test('returns empty array if options not valid', () => {
    const result = formatFlatArrayFormat(undefined);
    expect(result).toEqual([]);
  });

  test('converts string array into IOptions format', () => {
    const result = formatFlatArrayFormat([{
      value: 'test1',
      label: 'test1'
    }, {
      value: 'test2',
      label: 'test2'
    }, {
      value: 'test3',
      label: 'test3'
    }]);
    expect(result).toEqual(['test1', 'test2', 'test3']);
  });
});

