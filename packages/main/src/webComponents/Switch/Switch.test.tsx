import { mount } from 'enzyme';
import { Switch } from '@ui5/webcomponents-react/lib/Switch';
import React from 'react';

describe('Switch', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Switch />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
