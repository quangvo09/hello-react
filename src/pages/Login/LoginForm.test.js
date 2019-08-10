import React from 'react';
import { shallow, mount } from 'enzyme';

import LoginFormComponent from './LoginForm';

describe('LoginForm', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<LoginFormComponent isSubmitting={false}/>)
    expect(wrapper).toMatchSnapshot();
  })

  it('should render form correctly', () => {
    let wrapper = mount(<LoginFormComponent isSubmitting={false}/>)
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('[data-testid="login-button"]').exists()).toBe(true);

    wrapper.setProps({ isSubmitting: true });
    wrapper.update();
    expect(wrapper.find('[data-testid="loading"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="login-button"]').exists()).toBe(false);
  })
})

