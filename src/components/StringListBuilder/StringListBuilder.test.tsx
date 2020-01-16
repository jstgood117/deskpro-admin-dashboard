import React from 'react';
import { Formik } from 'formik';

import { mount, shallow } from '../../test/enzyme';
import { WrapperType } from '../../test/types';

import StringListBuilder from './StringListBuilder';

describe('StringListBuilder', () => {
  const wrapper = (bShallow: boolean, props: any): WrapperType => {
    if (bShallow) {
      return shallow(
        <Formik {...props.formikProps}>
          {() => <StringListBuilder {...props.builderProps} />}
        </Formik>
      );
    }

    return mount(
      <Formik
        {...props.formikProps}
        render={() => <StringListBuilder {...props.builderProps} />}
      />
    );
  };

  it('should generate remove row on click', () => {
    const initialValues = { test: ['1st string', '2nd string'] };
    const mockValidate = jest.fn();
    const root = wrapper(false, {
      formikProps: {
        initialValues,
        validate: mockValidate
      },
      builderProps: {
        addTitle: 'test',
        id: 'test',
        name: 'test',
        values: initialValues.test
      }
    });
    expect(root.find('.string-row').length).toEqual(2);
    root
      .find('.string-row')
      .first()
      .simulate('click');
    expect(mockValidate).toBeCalled();
  });
});
