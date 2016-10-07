import expect from 'expect';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { spy } from 'sinon';

import SearchBar from './index';

describe('<SearchBar />', () => {
  const wrapper = mount(<SearchBar />);
  it('should render a form', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('should render a text input', () => {
    expect(wrapper.find('input').first().props().type).toEqual('text');
  });

  it('should render a submit input', () => {
    expect(wrapper.find('input').last().props().type).toEqual('submit');
  });

  it('should call handleSubmit onSubmit', () => {
    const handleSubmit = spy();
    const wrapperSimulate = shallow(<SearchBar onSubmit={handleSubmit} />);
    wrapperSimulate.find('input').last().simulate('click', event);
    expect(handleSubmit.withArgs(event).calledOnce).toEqual(true);
  });
});
