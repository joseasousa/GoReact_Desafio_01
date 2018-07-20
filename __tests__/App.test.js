import React from 'react';
import { shallow } from 'enzyme';

import App from '../src/App';

describe('<App />', () => {
  it('should ', () => {
    const wrapp = shallow(<App />);
    expect(wrapp).toHaveLength(1);
  });
});
