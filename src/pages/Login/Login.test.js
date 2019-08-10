import React from 'react';
import { shallow, mount } from 'enzyme';

import LoginComponent from './Login';

describe('Login', () => {
  it('should render correctly', () => {
    const component = shallow(<LoginComponent/>)
    expect(component).toMatchSnapshot();
  })
  it('should update state.isSubmitting when submitting', () => {
    const wrapper = mount(<LoginComponent/>)
    const instance = wrapper.instance();
    expect(instance.state.isSubmitting).toBe(false);
    wrapper.instance()._onSubmit();
    expect(instance.state.isSubmitting).toBe(true);
  })
})