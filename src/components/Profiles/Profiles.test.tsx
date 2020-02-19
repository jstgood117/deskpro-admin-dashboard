import React, { ReactNode } from 'react';
import { Formik } from 'formik';
import { mount } from '../../test/enzyme';

import Profiles from './Profiles';

const profiles = [
  { id: 'agent1', name: 'agent 1' },
  { id: 'agent2', name: 'agent 2' },
  { id: 'agent3', name: 'agent 2' }
];

const selected = {
  agent1: true,
  agent2: true
};

jest.mock('react-dom', () => ({
  createPortal: (node: ReactNode) => node
}));

describe('Profiles', () => {

  let mountedProfiles: any;

  const wrapper = () => {
    if (!mountedProfiles) {
      mountedProfiles = mount(
        <Formik
          initialValues={{
            profiles,
            selected,
          }}
          validate={() => { }}
          onSubmit={() => { }}
        >
          {formikProps => (
            <Profiles
              editable={true}
              onEditClick={() => { }}
              profiles={formikProps.values.profiles}
              selected={formikProps.values['selected']}
              title='Agents'
              formikProps={formikProps}
            />
          )}
        </Formik>
      );
    }
    return mountedProfiles;
  };

  it('renders a <div> root', () => {
    const root = wrapper();
    expect(root.length).toEqual(1);
  });

  it('should generate 4 buttons', () => {
    const root = wrapper();
    expect(root.find('button').length).toEqual(4);
  });
});
