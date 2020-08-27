import React from 'react';
import AddCar from './components/AddCar';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<AddCar />', () => {
  it('renders correctly', () => {
    shallow(<AddCar />);
  });

  it('renders five div component', () => {
    const wrapper = shallow(<AddCar />);
    expect(wrapper.find('div').length).toEqual(1);
  });
});
