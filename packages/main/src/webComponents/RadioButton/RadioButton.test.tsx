import { mount } from 'enzyme';
import { RadioButton } from '@ui5/webcomponents-react/lib/RadioButton';
import React from 'react';

describe('RadioButton', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<RadioButton />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
