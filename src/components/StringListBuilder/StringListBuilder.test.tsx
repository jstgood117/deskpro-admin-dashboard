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
          {formikProps => (
            <StringListBuilder
              {...props.builderProps}
              values={formikProps.values[props.builderProps.id]}
            />
          )}
        </Formik>
      );
    }

    return mount(
      <Formik {...props.formikProps}>
        {formikProps => (
          <StringListBuilder
            {...props.builderProps}
            values={formikProps.values[props.builderProps.id]}
          />
        )}
      </Formik>
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
        name: 'test'
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
