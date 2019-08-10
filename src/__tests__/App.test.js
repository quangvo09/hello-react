import React from 'react';
import { mount, shallow } from 'enzyme';

import AppComponent from '../App';

describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<AppComponent debug/>)
    expect(component).toMatchSnapshot();
  })
  it('should render correctly with no props', () => {
    const component = shallow(<AppComponent/>)
    expect(component).toMatchSnapshot();
  })
  it('should render banner text correctly with given strings', () => {
    const strings = ['one', 'two'];
    const component = shallow(<AppComponent list={strings} />);
    expect(component).toMatchSnapshot();
  });
  it('should be possible to activate button with Spacebar', () => {
    const component = mount(<AppComponent />);
    component
      .find('button#my-button-one')
      .simulate('keydown', { keyCode: 32 });
    expect(component).toMatchSnapshot();
    component.unmount();
  });
})

const clickFunc = jest.fn();
describe('App interact', () => {
  it('button click should hide component', () => {
    const component = shallow(<AppComponent onClick={clickFunc} />)
    component
      .find('button#my-button-one')
      .simulate('click');
    expect(clickFunc).toHaveBeenCalled();
  })
})

const mockTryGetValue = jest.fn(() => false);
jest.mock('../save-to-storage', () => ({   
  SaveToStorage: jest.fn().mockImplementation(() => ({
    getValue: mockTryGetValue,
  })), 
}));
mockTryGetValue.mockReturnValueOnce(false);

describe('App save to storage', () => {
  it('should set storage on save button click', () => {
    
    const component = shallow(<AppComponent onClick={clickFunc} />)
    component
      .find('button#my-button-two')
      .simulate('click')
      .simulate('click');
    expect(mockTryGetValue).toHaveBeenCalled();
    expect(component).toMatchSnapshot();
    component.unmount();  
  })
})
