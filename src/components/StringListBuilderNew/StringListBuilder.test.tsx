import React, { ReactNode } from 'react';
import { Formik } from 'formik';
import { mount } from '../../test/enzyme';

import StringListBuilder from './StringListBuilder';

const options = [
  'Usergroup 1',
  'Usergroup 2',
  'Usergroup 3',
];
const selectedOptions = [
  'Usergroup 1',
  'Usergroup 2'
];

jest.mock('react-dom', () => ({
  createPortal: (node: ReactNode) => node
}));

describe('StringListBuilder', () => {

  let mountedBuilder: any;

  const wrapper = () => {
    if (!mountedBuilder) {
      mountedBuilder = mount(
        <Formik
          initialValues={{
            options,
            selectedOptions,
          }}
          validate={() => { }}
          onSubmit={() => { }}
        >
          {props => (
            <StringListBuilder
              id='selectedOptions'
              title='Usergroups'
              buttonTitle='Add Usergroup'
              options={props.values.options}
              selectedOptions={props.values['selectedOptions']}
              formikProps={props}
            />
          )}
        </Formik>
      );
    }
    return mountedBuilder;
  };


  it('renders a <div> root', () => {
    const root = wrapper();
    expect(root.length).toEqual(1);
  });

  it('should generate 2 rows', () => {
    const root = wrapper();
    expect(root.find('.string-row span').length).toEqual(2);
  });
});
